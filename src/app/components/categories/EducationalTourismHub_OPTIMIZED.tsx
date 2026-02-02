// Educational Tourism Hub - OPTIMIZED VERSION
// Reduced from 1,485 lines to ~400 lines using:
// - educationalData.ts for all data
// - CategoryHubTemplate for UI structure
// - Links to existing flow components

import { useState } from 'react';
import { CategoryHubTemplate } from '@/app/components/templates/CategoryHubTemplate';
import {
  educationalPathways,
  learningThemesK12,
  academicFocusTypes,
  educationalPackages,
  getPathwayById
} from '@/data/educationalData';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { GraduationCap, Users, Microscope, BookOpen, Lightbulb, Shield } from 'lucide-react';
import { SchoolGroupsK12Flow } from '@/app/components/categories/SchoolGroupsK12Flow';
import { CollegeUniversityGroupsFlow } from '@/app/components/categories/CollegeUniversityGroupsFlow';
import ResearchGroupsFlow from '@/app/components/categories/ResearchGroupsFlow';
import IndividualResearchersEnhanced from '@/app/components/categories/IndividualResearchersEnhanced';

interface EducationalTourismHubProps {
  onBack: () => void;
}

type ViewMode = 'hub' | 'school-flow' | 'college-flow' | 'research-flow' | 'individual-flow';

export default function EducationalTourismHub({ onBack }: EducationalTourismHubProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');

  // School Groups Flow
  if (viewMode === 'school-flow') {
    return <SchoolGroupsK12Flow onBack={() => setViewMode('hub')} />;
  }

  // College/University Groups Flow
  if (viewMode === 'college-flow') {
    return <CollegeUniversityGroupsFlow onBack={() => setViewMode('hub')} />;
  }

  // Research Groups Flow
  if (viewMode === 'research-flow') {
    return <ResearchGroupsFlow onBack={() => setViewMode('hub')} />;
  }

  // Individual Researchers Flow
  if (viewMode === 'individual-flow') {
    return <IndividualResearchersEnhanced onBack={() => setViewMode('hub')} />;
  }

  // Main Hub View using CategoryHubTemplate
  return (
    <CategoryHubTemplate
      categoryName="Educational Tourism"
      description="Learning journeys for students, researchers & academic groups"
      categories={educationalPathways.map(pathway => ({
        id: pathway.id,
        name: pathway.name,
        icon: pathway.icon,
        description: pathway.description,
        tags: pathway.features.slice(0, 3),
        gradient: pathway.gradient
      }))}
      onBack={onBack}
      onCategorySelect={(id) => {
        switch (id) {
          case 'school-k12':
            setViewMode('school-flow');
            break;
          case 'college-university':
            setViewMode('college-flow');
            break;
          case 'research-groups':
            setViewMode('research-flow');
            break;
          case 'individual-researchers':
            setViewMode('individual-flow');
            break;
          default:
            setViewMode('hub');
        }
      }}
      heroGradient="from-purple-500 to-indigo-600"
      searchPlaceholder="Search educational programs..."
      showGoogleSearch={true}
      showYoutubeSearch={true}
      filters={[
        {
          id: 'pathway',
          label: 'Pathway Type',
          values: educationalPathways.map(p => p.name)
        },
        {
          id: 'duration',
          label: 'Duration',
          values: ['1 day', '2-3 days', '1 week', '2+ weeks']
        },
        {
          id: 'ageGroup',
          label: 'Age Group',
          values: ['K-12', 'Undergraduate', 'Graduate', 'PhD', 'All Ages']
        }
      ]}
      statsComponent={<EducationalStatsSection />}
      infoComponent={<EducationalBenefitsCard />}
      renderHeaderActions={() => (
        <button
          className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          📋 View Pathways
        </button>
      )}
      gridColumns={2}
    />
  );
}

// Stats Section Component
function EducationalStatsSection() {
  const totalPathways = educationalPathways.length;
  const totalThemes = learningThemesK12.length;
  const totalPackages = educationalPackages.length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-purple-600">{totalPathways}</div>
        <div className="text-xs text-gray-600">Pathways</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-blue-600">{totalThemes}</div>
        <div className="text-xs text-gray-600">Learning Themes</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-indigo-600">{totalPackages}</div>
        <div className="text-xs text-gray-600">Packages</div>
      </Card>
    </div>
  );
}

// Educational Benefits Card Component
function EducationalBenefitsCard() {
  const benefits = [
    {
      icon: Lightbulb,
      title: '[Admin: Experiential Learning]',
      description: 'Beyond textbooks into real-world applications'
    },
    {
      icon: Users,
      title: '[Admin: Teamwork & Leadership]',
      description: 'Collaborative learning experiences'
    },
    {
      icon: GraduationCap,
      title: '[Admin: Career Insights]',
      description: 'Industry exposure and networking'
    },
    {
      icon: Shield,
      title: '[Admin: Safe & Supervised]',
      description: 'Safety-first approach with expert guides'
    }
  ];

  return (
    <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
      <h2 className="text-lg font-bold text-gray-900 mb-4">[Admin: Why Educational Tourism?]</h2>
      <div className="grid grid-cols-2 gap-4">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-xs text-gray-600">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

// Learning Themes Section (for K-12)
export function LearningThemesSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">[Admin: K-12 Learning Themes]</h2>
      <div className="grid grid-cols-1 gap-4">
        {learningThemesK12.map(theme => (
          <Card key={theme.id} className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-2xl">{theme.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{theme.name}</h3>
                <p className="text-xs text-gray-600">{theme.recommendedGrade}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">{theme.description}</p>
            <div className="flex flex-wrap gap-1">
              {theme.subjects.map(subject => (
                <Badge key={subject} variant="outline" className="text-xs">
                  {subject}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Academic Focus Section (for College/University)
export function AcademicFocusSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">[Admin: Academic Focus Areas]</h2>
      <div className="grid grid-cols-1 gap-4">
        {academicFocusTypes.map(focus => (
          <Card key={focus.id} className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{focus.name}</h3>
            <p className="text-sm text-gray-700 mb-3">{focus.description}</p>
            
            <div className="mb-3">
              <p className="text-xs font-semibold text-gray-900 mb-1">Departments:</p>
              <div className="flex flex-wrap gap-1">
                {focus.departments.slice(0, 4).map(dept => (
                  <Badge key={dept} variant="outline" className="text-xs">
                    {dept}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-900 mb-1">Research Areas:</p>
              <div className="flex flex-wrap gap-1">
                {focus.researchAreas.slice(0, 3).map(area => (
                  <Badge key={area} className="text-xs bg-purple-100 text-purple-700">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Packages Section
export function EducationalPackagesSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">[Admin: Educational Packages]</h2>
      <div className="grid grid-cols-1 gap-4">
        {educationalPackages.map(pkg => (
          <Card key={pkg.id} className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-600">{pkg.ageGroup}</p>
              </div>
              <Badge className="bg-purple-100 text-purple-700">{pkg.pathway}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-700">
              <div>📅 {pkg.duration}</div>
              <div>👥 {pkg.groupSize}</div>
            </div>

            <div className="text-2xl font-bold text-purple-600 mb-4">{pkg.price}</div>

            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-900 mb-2">Included:</p>
              <ul className="space-y-1">
                {pkg.included.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-full">
              Book This Package
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Export for compatibility
export default EducationalTourismHub;
