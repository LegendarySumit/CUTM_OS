import AppLayout from "../../layout/AppLayout";
import Card from "../../components/ui/Card";
import { FaBook, FaLink, FaDownload, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const ResourcesPage = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const resources = [
    // Data Structures & Algorithms
    {
      id: 1,
      title: "DSA Complete Guide",
      description: "Master data structures with real-world examples and interview questions",
      category: "Data Structures",
      icon: "📊",
      rating: 4.8,
      reviews: 324,
      type: "PDF",
      difficulty: "Beginner",
      author: "GeeksforGeeks",
      downloadSize: "2.5 MB"
    },
    {
      id: 2,
      title: "Advanced Algorithms Mastery",
      description: "Deep dive into sorting, searching, and optimization algorithms",
      category: "Data Structures",
      icon: "🔍",
      rating: 4.9,
      reviews: 412,
      type: "Course",
      difficulty: "Advanced",
      author: "MIT OpenCourseWare",
      downloadSize: "Video Course"
    },
    {
      id: 3,
      title: "Big O Notation Explained",
      description: "Understand time and space complexity with practical examples",
      category: "Data Structures",
      icon: "⚡",
      rating: 4.6,
      reviews: 218,
      type: "Article",
      difficulty: "Intermediate",
      author: "Tech Blogs",
      downloadSize: "4 Articles"
    },
    // Database & RDBMS
    {
      id: 4,
      title: "Database Normalization",
      description: "Complete guide to database design, normalization, and optimization",
      category: "Database",
      icon: "💾",
      rating: 4.6,
      reviews: 287,
      type: "Article",
      difficulty: "Intermediate",
      author: "Database Experts",
      downloadSize: "8 Articles"
    },
    {
      id: 5,
      title: "RDBMS Fundamentals",
      description: "Learn SQL, transactions, indexing, and query optimization",
      category: "Database",
      icon: "🗂️",
      rating: 4.7,
      reviews: 356,
      type: "Course",
      difficulty: "Beginner",
      author: "Udemy",
      downloadSize: "Video Course"
    },
    {
      id: 6,
      title: "SQL Query Optimization",
      description: "Advanced SQL techniques for high-performance databases",
      category: "Database",
      icon: "🚀",
      rating: 4.8,
      reviews: 198,
      type: "eBook",
      difficulty: "Advanced",
      author: "PostgreSQL Official",
      downloadSize: "3.2 MB"
    },
    // Web Development
    {
      id: 7,
      title: "Web Development Roadmap",
      description: "Complete learning path from HTML to full-stack development",
      category: "Web Dev",
      icon: "🌐",
      rating: 4.7,
      reviews: 521,
      type: "Website",
      difficulty: "Beginner",
      author: "Web Dev Community",
      downloadSize: "Interactive Guide"
    },
    {
      id: 8,
      title: "React.js Advanced Patterns",
      description: "Master hooks, context, optimization, and performance tuning",
      category: "Web Dev",
      icon: "⚛️",
      rating: 4.9,
      reviews: 445,
      type: "Course",
      difficulty: "Advanced",
      author: "Wes Bos",
      downloadSize: "Video Course"
    },
    {
      id: 9,
      title: "REST API Design Guide",
      description: "Best practices for designing scalable and maintainable APIs",
      category: "Web Dev",
      icon: "🔌",
      rating: 4.8,
      reviews: 267,
      type: "PDF",
      difficulty: "Intermediate",
      author: "API Design Team",
      downloadSize: "1.8 MB"
    },
    // Object-Oriented Programming
    {
      id: 10,
      title: "OOP Principles Deep Dive",
      description: "Understand inheritance, polymorphism, encapsulation with examples",
      category: "OOP",
      icon: "🏗️",
      rating: 4.7,
      reviews: 334,
      type: "Course",
      difficulty: "Intermediate",
      author: "Design Patterns Pro",
      downloadSize: "Video Course"
    },
    {
      id: 11,
      title: "Design Patterns Handbook",
      description: "Learn creational, structural, and behavioral design patterns",
      category: "OOP",
      icon: "🎨",
      rating: 4.9,
      reviews: 403,
      type: "eBook",
      difficulty: "Advanced",
      author: "Gang of Four",
      downloadSize: "2.1 MB"
    },
    {
      id: 12,
      title: "SOLID Principles Explained",
      description: "Master SOLID principles for clean and maintainable code",
      category: "OOP",
      icon: "✨",
      rating: 4.8,
      reviews: 276,
      type: "Article",
      difficulty: "Intermediate",
      author: "Clean Code Institute",
      downloadSize: "6 Articles"
    },
    // Java Programming
    {
      id: 13,
      title: "Java Complete Guide",
      description: "From basics to advanced Java features, collections, and streams",
      category: "Java",
      icon: "☕",
      rating: 4.8,
      reviews: 567,
      type: "Course",
      difficulty: "Beginner",
      author: "Oracle Academy",
      downloadSize: "Video Course"
    },
    {
      id: 14,
      title: "Spring Framework Mastery",
      description: "Build enterprise applications with Spring Boot and Spring Cloud",
      category: "Java",
      icon: "🌿",
      rating: 4.9,
      reviews: 389,
      type: "Course",
      difficulty: "Advanced",
      author: "Spring IO",
      downloadSize: "Video Course"
    },
    {
      id: 15,
      title: "Multithreading in Java",
      description: "Concurrency, threads, synchronization, and thread pools",
      category: "Java",
      icon: "🔀",
      rating: 4.7,
      reviews: 214,
      type: "PDF",
      difficulty: "Intermediate",
      author: "Java Documentation",
      downloadSize: "2.8 MB"
    },
    // Software Testing
    {
      id: 16,
      title: "Software Testing Fundamentals",
      description: "Unit testing, integration testing, and automated testing strategies",
      category: "Software Testing",
      icon: "✅",
      rating: 4.6,
      reviews: 298,
      type: "Course",
      difficulty: "Beginner",
      author: "QA Academy",
      downloadSize: "Video Course"
    },
    {
      id: 17,
      title: "Jest & React Testing Library",
      description: "Complete guide to testing React applications effectively",
      category: "Software Testing",
      icon: "🧪",
      rating: 4.8,
      reviews: 345,
      type: "Course",
      difficulty: "Intermediate",
      author: "Testing Library",
      downloadSize: "Video Course"
    },
    {
      id: 18,
      title: "Test-Driven Development",
      description: "Write better code by writing tests first, TDD best practices",
      category: "Software Testing",
      icon: "📝",
      rating: 4.9,
      reviews: 276,
      type: "eBook",
      difficulty: "Advanced",
      author: "TDD Experts",
      downloadSize: "1.9 MB"
    },
    // DAA (Design & Analysis of Algorithms)
    {
      id: 19,
      title: "Algorithm Analysis Guide",
      description: "Understand asymptotic notation, complexity analysis, and proof techniques",
      category: "DAA",
      icon: "📐",
      rating: 4.7,
      reviews: 287,
      type: "PDF",
      difficulty: "Intermediate",
      author: "MIT",
      downloadSize: "3.1 MB"
    },
    {
      id: 20,
      title: "NP-Complete Problems",
      description: "Deep understanding of computational complexity and NP problems",
      category: "DAA",
      icon: "🧩",
      rating: 4.8,
      reviews: 156,
      type: "Course",
      difficulty: "Advanced",
      author: "CLRS Book Authors",
      downloadSize: "Video Course"
    },
    {
      id: 21,
      title: "Graph Algorithms Collection",
      description: "BFS, DFS, shortest paths, minimum spanning trees, and flow networks",
      category: "DAA",
      icon: "🌳",
      rating: 4.9,
      reviews: 401,
      type: "PDF",
      difficulty: "Intermediate",
      author: "Algorithm Specialists",
      downloadSize: "2.4 MB"
    },
    // System Design
    {
      id: 22,
      title: "System Design Interview",
      description: "Design scalable systems, databases, caching, and load balancing",
      category: "System Design",
      icon: "🏢",
      rating: 4.9,
      reviews: 512,
      type: "Video",
      difficulty: "Advanced",
      author: "System Design Pro",
      downloadSize: "Video Course"
    },
    {
      id: 23,
      title: "Microservices Architecture",
      description: "Build distributed systems with microservices patterns and practices",
      category: "System Design",
      icon: "🔧",
      rating: 4.8,
      reviews: 367,
      type: "Course",
      difficulty: "Advanced",
      author: "Cloud Native Foundation",
      downloadSize: "Video Course"
    },
    {
      id: 24,
      title: "Distributed Systems Design",
      description: "Consensus algorithms, CAP theorem, eventual consistency, and fault tolerance",
      category: "System Design",
      icon: "⛓️",
      rating: 4.8,
      reviews: 234,
      type: "eBook",
      difficulty: "Advanced",
      author: "Distributed Systems Lab",
      downloadSize: "3.5 MB"
    },
    // Interview Preparation
    {
      id: 25,
      title: "Interview Preparation Guide",
      description: "Comprehensive guide to ace coding, system design, and behavioral interviews",
      category: "Interview Prep",
      icon: "🎯",
      rating: 4.8,
      reviews: 678,
      type: "eBook",
      difficulty: "All Levels",
      author: "Interview Masters",
      downloadSize: "4.2 MB"
    },
    {
      id: 26,
      title: "LeetCode Problem Patterns",
      description: "Master top problem-solving patterns and strategies",
      category: "Interview Prep",
      icon: "🔢",
      rating: 4.9,
      reviews: 543,
      type: "Course",
      difficulty: "Intermediate",
      author: "LeetCode Pro",
      downloadSize: "Video Course"
    },
  ];

  const categories = [
    "Data Structures",
    "Database",
    "Web Dev",
    "OOP",
    "Java",
    "Software Testing",
    "DAA",
    "System Design",
    "Interview Prep"
  ];

  const categoryIcons = {
    "Data Structures": "📊",
    "Database": "💾",
    "Web Dev": "🌐",
    "OOP": "🏗️",
    "Java": "☕",
    "Software Testing": "✅",
    "DAA": "📐",
    "System Design": "🏢",
    "Interview Prep": "🎯"
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  const getCategoryResources = (category) => {
    return resources.filter(r => 
      r.category === category && 
      (r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       r.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <AppLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">📚 Learning Resources</h1>
        <p className="text-gray-600">Comprehensive collection of study materials, courses, and references organized by subject</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search resources by title or topic..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Resource Sections by Category */}
      <div className="space-y-6">
        {categories.map((category) => {
          const categoryResources = getCategoryResources(category);
          const isExpanded = expandedCategories[category] !== false; // Default true

          if (categoryResources.length === 0 && searchTerm) {
            return null;
          }

          return (
            <div key={category}>
              {/* Category Header */}
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <div
                  onClick={() => toggleCategory(category)}
                  className="flex items-center justify-between select-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{categoryIcons[category]}</span>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{category}</h2>
                      <p className="text-sm text-gray-500 mt-0.5">{categoryResources.length} resources available</p>
                    </div>
                  </div>
                  <div className="text-primary-600">
                    {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                  </div>
                </div>
              </Card>

              {/* Resources Grid - Expandable */}
              {isExpanded && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4">
                  {categoryResources.map((resource) => (
                    <Card key={resource.id} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                      {/* Header - Icon and Title Aligned */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl flex-shrink-0">{resource.icon}</span>
                        <h3 className="font-semibold text-gray-900 text-sm leading-snug flex-1">{resource.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-1">{resource.description}</p>

                      {/* Meta Info */}
                      <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-medium px-2 py-1 rounded ${getDifficultyColor(resource.difficulty)}`}>
                            {resource.difficulty}
                          </span>
                          <span className="text-xs text-gray-500">{resource.downloadSize}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-xs" fill={i < Math.floor(resource.rating) ? "currentColor" : "none"} />
                              ))}
                            </div>
                            <span className="text-gray-600 ml-1">({resource.reviews})</span>
                          </div>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded font-medium text-xs">
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">By {resource.author}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition font-medium text-sm">
                          <FaLink className="text-sm" />
                          View
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-2 rounded-lg hover:bg-gray-200 transition font-medium text-sm">
                          <FaDownload className="text-sm" />
                          Save
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Recommended For You */}
      <Card className="mt-12">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-gray-900">💡 Recommended For You</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { title: "Advanced DSA Patterns", reason: "Based on your recent activities", difficulty: "Advanced" },
            { title: "Java Concurrency Mastery", reason: "Popular in your department", difficulty: "Intermediate" },
            { title: "System Design for Interviews", reason: "Trending this week", difficulty: "Advanced" },
            { title: "React Testing Best Practices", reason: "Recommended for Web Dev", difficulty: "Intermediate" },
          ].map((rec, idx) => (
            <div key={idx} className="p-4 bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-lg hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{rec.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{rec.reason}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded whitespace-nowrap ml-2 ${getDifficultyColor(rec.difficulty)}`}>
                  {rec.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AppLayout>
  );
};

export default ResourcesPage;
