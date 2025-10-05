import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center flex items-center flex-col justify-center h-150">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Better-Auth
            <span className="block text-orange-500">By Maurii.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the power of better-auth with this comprehensive demo
            showcasing social providers, email/password authentication, and
            protected routes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Try Authentication
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              View Dashboard
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal</h3>
            <p className="text-gray-600">
              Build a secure and modern authentication system using Next.js and
              BetterAuth, with both email and social login support.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Features
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Email + social login (Google, GitHub)</li>
              <li>Passwordless magic link authentication</li>
              <li>Protected routes & secure sessions</li>
              <li>Full stack with Prisma + Neon</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Challenges & Learnings
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Integrating BetterAuth with Next.js routing</li>
              <li>Designing Prisma schema for sessions</li>
              <li>Handling auth state & redirects</li>
            </ul>
          </div>
        </div>

        {/* Demo Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tech Stack & Features
            </h2>
            <p className="text-lg text-gray-600">
              Built with modern technologies to deliver a secure and performant
              authentication experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tech Stack Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                🧰 Tech Stack
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Next.js (App Router)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>TailwindCSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Prisma + Neon (PostgreSQL)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>BetterAuth (Email + Social Login)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Deployed on Netlify</span>
                </li>
              </ul>
            </div>

            {/* Features Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                ⚙️ Key Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Google and GitHub OAuth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Passwordless authentication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Protected dashboard routes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Session management with Prisma</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Custom error handling & redirects</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://maurii-auth.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-400 transition-colors"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Dopest0727/nextJS-BetterAuth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-orange-500 text-base font-medium rounded-lg text-orange-600 hover:bg-orange-50 transition-colors"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Maurii — Frontend Developer
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Modern web applications built with performance, accessibility, and
              user experience in mind.
            </p>

            <div className="flex justify-center space-x-5 pt-6">
              <a
                href="https://github.com/Dopest0727"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.016c0 4.418 2.865 8.166 6.839 9.504.5.092.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.159-1.11-1.467-1.11-1.467-.908-.62.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.528 2.341 1.087 2.91.831.091-.647.35-1.087.635-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.447-1.273.098-2.654 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.852.004 1.709.115 2.512.336 1.908-1.295 2.746-1.026 2.746-1.026.547 1.381.203 2.401.1 2.654.642.7 1.029 1.595 1.029 2.688 0 3.848-2.338 4.694-4.566 4.943.36.31.68.919.68 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.02 10.02 0 0022 12.016C22 6.484 17.523 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://se.linkedin.com/in/maurii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
            0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 
            0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 
            1.75 1.76-.78 1.76-1.75 1.76zm13.25 11.27h-3v-5.5c0-1.31-.02-3-1.83-3-1.83 
            0-2.11 1.43-2.11 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.75 
            1.38-1.54 2.84-1.54 3.03 0 3.59 2 3.59 4.59v5.59z"
                  />
                </svg>
              </a>
            </div>

            <p className="text-gray-500 text-sm pt-6">
              © {new Date().getFullYear()} By Maurii. Built with Next.js &
              TailwindCSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
