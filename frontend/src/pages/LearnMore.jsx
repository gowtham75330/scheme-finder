import { Link } from 'react-router-dom';
import { ShieldCheckIcon, UserGroupIcon, AcademicCapIcon, BriefcaseIcon, BuildingLibraryIcon, ArrowLeftIcon, HandThumbUpIcon, MagnifyingGlassIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';

export default function LearnMore() {
  return (
    <div className="flex flex-col flex-1 bg-slate-50 font-sans py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium">
          <ArrowLeftIcon className="w-5 h-5" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheckIcon className="w-4 h-4" /> User Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">How to Use the Portal</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            This platform is designed to instantly match you with State and Central Government welfare schemes. Follow these simple steps to claim your benefits.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">1</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Create Your Account</h3>
                <p className="text-slate-600">Register on the portal using your basic details. This creates a secure vault for your eligibility profile.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">2</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fill the Eligibility Profile</h3>
                <p className="text-slate-600">Log in and navigate to the Profile section. Carefully provide your education, category, income, and profession. The system uses this exact data to filter schemes.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">3</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Discover Matched Schemes</h3>
                <p className="text-slate-600">Go to the 'Find Schemes' dashboard. Our automated engine will instantly display a tailored list of scholarships and monetary benefits you are 100% eligible for.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">4</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Apply Directly</h3>
                <p className="text-slate-600">Click on any scheme card to see document requirements, then use the provided direct link to apply on the official Government portal.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Who Benefits From This?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <AcademicCapIcon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Students & Aspirants</h4>
              <p className="text-slate-600 text-sm">Discover Post-Matric scholarships, technical grants, and First Graduate concessions to fund your higher education without financial stress.</p>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Women & Children</h4>
              <p className="text-slate-600 text-sm">Access maternity benefits, marriage assistance, girl-child education funds, and entrepreneurship loans aimed at empowering women.</p>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <BuildingLibraryIcon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Farmers & Agriculture</h4>
              <p className="text-slate-600 text-sm">Find crop insurance, equipment subsidies, fertilizer backing, and drought relief funds specific to your landholding size.</p>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <BriefcaseIcon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Unemployed Youth</h4>
              <p className="text-slate-600 text-sm">Get matched with skill development camps, unemployment allowances, and micro-business setup funds to jumpstart your career.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
