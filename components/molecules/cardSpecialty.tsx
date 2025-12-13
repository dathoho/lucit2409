
import { Specialty, LoadingState, AISpecialtyDetails } from '../../types/index';
import { fetchSpecialtyDetails } from '@/lib/actions/department.action';
import { HeartIcon, BrainIcon, ChildIcon, BoneIcon, SkinIcon, EyeIcon, ChevronDownIcon, SparklesIcon } from '@/components/ui/icons';


interface SpecialtyCardProps {
  specialty: Specialty;
  isOpen: boolean
}

const iconMap = {
  heart: HeartIcon,
  brain: BrainIcon,
  child: ChildIcon,
  bone: BoneIcon,
  skin: SkinIcon,
  eye: EyeIcon,
};

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ specialty, isOpen }) => {
  const Icon = iconMap[specialty.iconName];

  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden transition-all duration-300 border border-slate-200 ${
        isOpen ? 'shadow-xl ring-2 ring-blue-500/20' : 'shadow-sm hover:shadow-md'
      }`}
    >
      {/* Header Section (Always Visible) */}
      <div 
        className="cursor-pointer p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors"
      >
        <div className={`p-3 rounded-lg shrink-0 ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
          <Icon className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xl font-bold text-slate-900">{specialty.name}</h3>
            <ChevronDownIcon 
              className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </div>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {specialty.shortDescription}
          </p>
        </div>
      </div>

      {/* Expanded Content Section */}
      <div 
        className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
          
          {/* Static Detailed Description */}
          <div className="py-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">About the Department</h4>
            <p className="text-slate-700 leading-relaxed text-base">
              {specialty.fullDescription}
            </p>
          </div>

          <div className="border-t border-slate-200 my-2"></div>

          {/* Detailed Lists (Conditions & Treatments) */}
          <div className="space-y-6 animate-fadeIn py-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-slate-900 font-semibold mb-3 flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Common Conditions
                </h4>
                <ul className="space-y-2">
                  {specialty.commonConditions.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm pl-4 border-l-2 border-slate-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-slate-900 font-semibold mb-3 flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Key Treatments
                </h4>
                <ul className="space-y-2">
                  {specialty.treatments.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm pl-4 border-l-2 border-slate-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SpecialtyCard;
