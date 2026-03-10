/**
 * Environment Validation Utility
 * Ensures all required environment variables are set before app startup
 */

export const validateEnvironment = () => {
  const required = ['FIREBASE_PROJECT_ID', 'NODE_ENV', 'PORT'];
  const missing = [];

  for (const envVar of required) {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  }

  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach(env => {
      console.error(`   - ${env}`);
    });
    console.error('\n📋 Please set these variables in your .env file');
    console.error('📖 Reference: .env.example');
    throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  }

  // Validate Firebase credentials
  if (process.env.NODE_ENV === 'production' && !process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
    console.warn('⚠️  FIREBASE_SERVICE_ACCOUNT_PATH not set. Using default credentials.');
    console.warn('   This works on Render/Vercel but requires GOOGLE_APPLICATION_CREDENTIALS');
  }

  console.log('✅ Environment validation passed');
  return true;
};

export default validateEnvironment;
