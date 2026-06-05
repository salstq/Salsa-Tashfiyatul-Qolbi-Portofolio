<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salsa Tashfiyatul Qolbi - Data Analyst Portfolio</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
    
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-slate-950 text-slate-100 font-sans">

    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        // Data Mock untuk Project Data Analyst
        const projectsData = [
          {
            id: 1,
            title: "D2C Brand Marketing Campaign Analysis",
            category: "Business Intelligence",
            tools: ["SQL", "Power BI", "GitHub"],
            summary: "Marketing campaign analytics project to evaluate performance, ROAS, channel effectiveness, and revenue trends.",
            description: "This marketing campaign analytics project utilizes SQL and Power BI to evaluate end-to-end campaign performance. By analyzing performance metrics, we calculated Return on Ad Spend (ROAS), determined channel effectiveness across multiple marketing streams, and visualized overall revenue trends. These insights help marketing teams optimize their ad spend budget and focus on high-converting channels.",
            insights: [
              "Identified channels yielding the highest Return on Ad Spend (ROAS), streamlining marketing budget allocation.",
              "Mapped seasonal revenue trends and correlation with campaign launch schedules.",
              "Created an interactive, real-time dashboard for cross-functional marketing teams to track daily KPIs."
            ],
            notebookLink: null,
            dashboardLink: "https://app.powerbi.com/groups/me/reports/e3dc7fed-c05a-474c-b763-bf23f3d116b1/c4b0aeacb588bce21c54?experience=power-bi",
            gsheetLink: null,
            githubLink: "https://github.com/salstq/Analisis-Campaign-Marketing-D2C-Brand",
            difficulty: "Intermediate",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
          },
          {
            id: 2,
            title: "Scientific Writing: Infant Cry Classification",
            category: "Deep Learning & NLP",
            tools: ["TensorFlow", "Python", "Streamlit", "Google Colab"],
            summary: "A machine learning and audio signal processing project focused on classifying infant cries based on acoustic features.",
            description: "This scientific study aims to classify infant cries into distinct behavioral categories based on sound analysis. MFCCs (Mel-Frequency Cepstral Coefficients) were extracted from raw audio files to represent speech features. We developed and trained neural network models using TensorFlow, deploying the final highly-accurate model onto a lightweight Streamlit web application for real-time sound file inference.",
            insights: [
              "Extracted Mel-Frequency Cepstral Coefficients (MFCCs) to model the unique acoustic frequencies of infant cries.",
              "Achieved high classification accuracy across key pain and comfort trigger patterns.",
              "Deployed a functional Streamlit application allowing users to upload WAV files for instant prediction."
            ],
            notebookLink: "https://github.com/salstq/Penulisan-Ilmiah-Infant-Cry",
            dashboardLink: "https://penulisan-ilmiah-infant-cry-bxuwumgwsbhverruhz7aqe.streamlit.app/",
            gsheetLink: null,
            githubLink: "https://github.com/salstq/Penulisan-Ilmiah-Infant-Cry",
            difficulty: "Advanced",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
          },
          {
            id: 3,
            title: "Makeup & Skincare Product Recommendation System",
            category: "Predictive Analytics",
            tools: ["Google Colab", "Python", "Scikit-Learn"],
            summary: "A content-based filtering system using TF-IDF and Cosine Similarity to suggest makeup and skincare items based on product profiles.",
            description: "This project builds an automated recommendation engine for makeup and skincare products. By utilizing a content-based filtering approach, the system extracts critical features like product descriptions, key ingredients, categories, and skin-type targets. We implemented TF-IDF vectorization to represent textual features and used Cosine Similarity to compute recommendations for personalized beauty matchmaking.",
            insights: [
              "Engineered text-processing pipelines to extract active skincare ingredients for comparative analysis.",
              "Utilized Cosine Similarity metrics to identify matching alternatives for discontinued beauty products.",
              "Optimized query response time within Google Colab environments for faster batch product lookups."
            ],
            notebookLink: "https://github.com/salstq/Recommendation-System-Products-and-Skincare-/blob/main/Machine_Learning_Terapan_Salsa_Tashfiyatul_Qolbi_Submission_2.ipynb",
            dashboardLink: null,
            gsheetLink: null,
            githubLink: "https://github.com/salstq/Recommendation-System-Products-and-Skincare-",
            difficulty: "Advanced",
            image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=600"
          }
        ];

        const certifications = [
          { title: "Coding Camp Graduation Certificate (Machine Learning Engineering)", issuer: "Dicoding / Coding Camp Powered by DBS Foundation 2025", year: "2025", link: "https://github.com/salstq/Salsa-Tashfiyatul-Qolbi-Portofolio/blob/main/public/%5BCoding%20Camp%202025%5D%20Certificate%20-%20MC009D5X0875.pdf" },
          { title: "Data Analyst Internship Certificate of Completion", issuer: "PT Jawa Pos Group Multi Media", year: "2026", link: "https://github.com/salstq/Salsa-Tashfiyatul-Qolbi-Portofolio/blob/main/public/Sertifikat%20Magang%20-%20Salsa%20-%20Data%20Analyst%20JPGM%20-%20Gundar.pdf" },
          { title: "Completion of Class 'Analisis Campaign Marketing D2C Brand dengan SQL'", issuer: "NgulikData", year: "2026", link: "https://ngulikdata.com/certificates/gg21_GEDm4Az" },
          { title: "SQL Server For Intermediate Certification", issuer: "Gunadarma / Lembaga Komputerisasi Gunadarma", year: "2025", link: "https://github.com/salstq/Salsa-Tashfiyatul-Qolbi-Portofolio/blob/main/public/signed_d713af5a106ee081cd303652e7e35eb8.pdf.pdf" }
        ];

        function App() {
          const [selectedProject, setSelectedProject] = useState(null);
          const [filterCategory, setFilterCategory] = useState("All");
          const [searchTerm, setSearchTerm] = useState("");

          // Memicu rendering ulang ikon Lucide setelah elemen ditambahkan ke DOM
          useEffect(() => {
            if (window.lucide) {
              window.lucide.createIcons();
            }
          }, [filterCategory, searchTerm, selectedProject]);

          const cvUrl = "https://github.com/salstq/Salsa-Tashfiyatul-Qolbi-Portofolio/blob/main/public/Salsa%20Tashfiyatul%20Qolbi-Resume.pdf";
          const profilePhotoUrl = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600";

          const categories = ["All", ...new Set(projectsData.map(p => p.category))];

          const filteredProjects = projectsData.filter(project => {
            const matchesCategory = filterCategory === "All" || project.category === filterCategory;
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  project.tools.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch;
          });

          return (
            <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-pink-500 selection:text-slate-950">
              
              {/* NAVIGATION */}
              <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="p-2 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-lg font-bold">
                      <i data-lucide="database" className="w-5 h-5 text-slate-950"></i>
                    </span>
                    <span className="font-bold text-base sm:text-lg tracking-wider bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                      SALSA TASHFIYATUL
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href={cvUrl} target="_blank" className="hidden sm:flex items-center space-x-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-pink-400 transition-all">
                      <i data-lucide="download" className="w-3.5 h-3.5"></i>
                      <span>Access CV</span>
                    </a>
                    <a href="#contact" className="px-4 py-2 text-xs md:text-sm font-bold rounded-full border border-pink-500/50 text-pink-400 hover:bg-pink-500/10 transition-all">
                      Contact Me
                    </a>
                  </div>
                </div>
              </header>

              {/* HERO SECTION */}
              <section id="home" className="relative py-16 lg:py-24 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-950/20 via-slate-950 to-slate-950">
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
                      <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1.5 text-xs text-pink-400 font-semibold">
                        <i data-lucide="sparkles" className="w-3.5 h-3.5 text-pink-500 animate-pulse"></i>
                        <span>Open for Job Opportunities & Collaboration</span>
                      </div>
                      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-50">
                        Hi, I'm <br />
                        <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                          Salsa Tashfiyatul Qolbi
                        </span> <br />
                        <span className="text-lg sm:text-2xl lg:text-3xl text-slate-400 font-medium mt-2 block">
                          Data Analyst & Data Science
                        </span>
                      </h1>
                      <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Final-year Computer Science student specializing in Data Analytics and Data Science. Experienced in SQL, Python, and advanced Excel for data tracking, cleaning, and reporting.
                      </p>
                      
                      <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                        <a href="#projects" className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-pink-500/20 flex items-center space-x-2 text-sm">
                          <span>Explore Projects</span>
                          <i data-lucide="chevron-right" className="w-4 h-4"></i>
                        </a>
                        <a href={cvUrl} target="_blank" className="px-5 py-2.5 bg-slate-900 text-slate-200 font-bold rounded-xl border border-slate-800 hover:text-pink-400 transition-all flex items-center space-x-2 text-sm">
                          <i data-lucide="download" className="w-4 h-4 text-pink-500"></i>
                          <span>Download CV</span>
                        </a>
                      </div>
                    </div>

                    {/* PHOTO PROFILE CORNER */}
                    <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-[2rem] rotate-6 opacity-30 blur-sm scale-105"></div>
                        <div className="w-full h-full rounded-[2rem] border-4 border-slate-900 overflow-hidden relative bg-slate-900 shadow-2xl">
                          <img src={profilePhotoUrl} alt="Profile" className="w-full h-full object-cover object-center" />
                          <div className="absolute bottom-4 left-4 text-xs text-slate-100 flex items-center gap-1 bg-slate-950/80 py-1 px-2.5 rounded-full backdrop-blur-sm border border-slate-800">
                            <i data-lucide="map-pin" className="w-3.5 h-3.5 text-pink-400"></i>
                            <span>Jakarta, Indonesia</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* METRIC */}
              <section className="bg-slate-900/40 border-y border-slate-900 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-black text-pink-400">5+</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Comprehensive Projects</p>
                    </div>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-black text-pink-400">3+</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Core Tech Mastered</p>
                    </div>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-black text-pink-400">2M+</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Rows of Cleaned Data</p>
                    </div>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-black text-pink-400">100%</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Dedication</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* PROJECTS SECTION */}
              <section id="projects" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                  <div className="inline-block bg-pink-500/10 text-pink-400 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
                    Featured Projects
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-50">Exploration of Analytical Case Studies</h2>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
                  <div className="relative w-full sm:w-72">
                    <input 
                      type="text" 
                      placeholder="Search tools (e.g. SQL, Python)..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-4 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map((cat, idx) => (
                      <button
                        key={idx}
                        onClick={() => setFilterCategory(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                          filterCategory === cat ? "bg-pink-500 text-slate-950 border-pink-500" : "bg-slate-900 border-slate-800 text-slate-400"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-slate-900 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all flex flex-col justify-between">
                      <div className="h-44 bg-slate-950 overflow-hidden relative">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
                        <span className="absolute top-3 right-3 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded text-[10px] text-pink-400 font-mono">
                          {project.difficulty}
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] text-pink-500 font-bold uppercase tracking-wider">{project.category}</span>
                          <h3 className="font-bold text-base mt-1 text-slate-100 line-clamp-1">{project.title}</h3>
                          <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">{project.summary}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-800/60">
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.tools.map((tool, i) => (
                              <span key={i} className="text-[10px] bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-slate-300">{tool}</span>
                            ))}
                          </div>
                          <div className="flex gap-3 text-xs font-bold">
                            {project.githubLink && (
                              <a href={project.githubLink} target="_blank" className="flex items-center gap-1 text-slate-300 hover:text-pink-400">
                                <i data-lucide="github" className="w-3.5 h-3.5"></i> Repo
                              </a>
                            )}
                            {project.dashboardLink && (
                              <a href={project.dashboardLink} target="_blank" className="flex items-center gap-1 text-pink-400 hover:underline">
                                <i data-lucide="external-link" className="w-3.5 h-3.5"></i> Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FOOTER */}
              <footer id="contact" className="border-t border-slate-900 py-8 mt-12 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                  <p>&copy; 2026 Salsa Tashfiyatul Qolbi. All rights reserved.</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/salstq" target="_blank" className="hover:text-pink-400"><i data-lucide="github" className="w-4 h-4"></i></a>
                    <a href="https://www.linkedin.com/in/salsatashfiyatulqolbi" target="_blank" className="hover:text-pink-400"><i data-lucide="linkedin" className="w-4 h-4"></i></a>
                  </div>
                </div>
              </footer>

            </div>
          );
        }

        // Render aplikasi ke DOM
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>
