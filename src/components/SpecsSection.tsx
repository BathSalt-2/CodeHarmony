import React from 'react';
import { Globe, Server, ShieldCheck, Boxes, Layers, GitBranch } from 'lucide-react';

const SpecsSection = () => {
  const supportedLanguages = [
    "JavaScript", "TypeScript", "Python", "Java", "C#", "PHP", 
    "Go", "Ruby", "Swift", "Kotlin", "Rust", "Dart"
  ];

  const supportedFrameworks = [
    "React", "Vue", "Angular", "Next.js", "Svelte", "Express", 
    "Django", "Flask", "Spring Boot", "Laravel", "Ruby on Rails", "Flutter"
  ];

  return (
    <section id="specs" className="section-padding bg-dark-400">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Technical <span className="gradient-text">Specifications</span>
          </h2>
          <p className="text-white/70 text-lg">
            CodeHarmony is built on advanced AI models and supports a wide range of programming languages,
            frameworks, and integration options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Languages & Frameworks */}
          <div className="card p-6 h-full">
            <div className="icon-highlight mb-5">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Languages & Frameworks</h3>
            <p className="text-white/70 mb-4">
              Generate code in all popular programming languages and frameworks, with optimized output for each ecosystem.
            </p>
            <div className="mt-4">
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {supportedLanguages.map((lang) => (
                    <span key={lang} className="px-2 py-1 bg-dark-300 rounded-md text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {supportedFrameworks.map((framework) => (
                    <span key={framework} className="px-2 py-1 bg-dark-300 rounded-md text-xs">
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Integration */}
          <div className="card p-6 h-full">
            <div className="icon-highlight mb-5 bg-gradient-to-br from-secondary-500 to-primary-500">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Integration Options</h3>
            <p className="text-white/70 mb-4">
              Integrate CodeHarmony into your existing workflow with our flexible API and tooling options.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">RESTful API</span>
              </li>
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">WebSocket real-time code generation</span>
              </li>
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">IDE Extensions (VS Code, IntelliJ)</span>
              </li>
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">CLI tool for terminal usage</span>
              </li>
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">GitHub Actions integration</span>
              </li>
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">CI/CD pipeline hooks</span>
              </li>
            </ul>
          </div>
          
          {/* Security */}
          <div className="card p-6 h-full">
            <div className="icon-highlight mb-5 bg-gradient-to-br from-accent-500 to-primary-500">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
            <p className="text-white/70 mb-4">
              We prioritize the security of your code and data with enterprise-grade protection.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">SOC 2 Type II certified</span>
              </li>
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">GDPR compliant data handling</span>
              </li>
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">End-to-end encryption</span>
              </li>
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">Private cloud deployment option</span>
              </li>
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">Code ownership guarantees</span>
              </li>
              <li className="flex items-start">
                <div className="text-success-500 mr-2">✓</div>
                <span className="text-white/80">Regular security audits</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-dark-300 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8 lg:col-span-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">
                How it Works
              </h3>
              <p className="text-white/70 mb-6">
                Our advanced AI model combines natural language understanding with deep programming knowledge to generate high-quality, 
                contextually appropriate code.
              </p>
              <div className="bg-dark-200 p-4 rounded-lg border border-dark-100">
                <div className="flex items-center mb-2">
                  <Layers size={20} className="text-primary-500 mr-2" />
                  <span className="font-medium">Key Technologies</span>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start">
                    <div className="text-success-500 mr-2">✓</div>
                    <span>Large language models fine-tuned on code</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-success-500 mr-2">✓</div>
                    <span>Semantic code understanding</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-success-500 mr-2">✓</div>
                    <span>Context-aware completion engine</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 bg-dark-400 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-600/20 border border-primary-600/30 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <h4 className="font-medium mb-2">Input</h4>
                  <p className="text-sm text-white/60">You describe what you want to create in natural language</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary-500/20 border border-secondary-500/30 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <h4 className="font-medium mb-2">Processing</h4>
                  <p className="text-sm text-white/60">Our AI analyzes your request and generates appropriate code</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-500/20 border border-accent-500/30 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <h4 className="font-medium mb-2">Output</h4>
                  <p className="text-sm text-white/60">Production-ready code that follows best practices</p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-dark-300 rounded-lg code-block">
                <div className="flex items-center mb-2">
                  <GitBranch size={18} className="text-secondary-500 mr-2" />
                  <span className="text-sm font-medium">Example Flow</span>
                </div>
                <pre className="text-xs text-white/80">
                  <code>{`Input: "Create a React hook that fetches data with loading and error states"
↓
Processing: Analyzing requirements, framework context, best practices
↓
Output: 
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Implementation details...
  }, [url]);
  
  return { data, loading, error };
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;