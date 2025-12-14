import DepartmentsSection from "@/components/organisms/our-departments";
import OurDoctors from "@/components/organisms/our-doctors";
import PatientTestimonials from "@/components/organisms/patient-testimonials-section";
import DynamicBanner from "@/components/organisms/home-banner";
import ErrorNotification from "@/components/molecules/error-notifications";
import { Suspense } from "react";
import SpecialtyCard from '@/components/molecules/cardSpecialty';

import { Specialty } from '@/types/index';


export const SPECIALTIES: Specialty[] = [
  {
    id: 'cardio',
    name: 'Cardiology',
    shortDescription: 'Diagnosis and treatment of disorders of the heart and the cardiovascular system.',
    fullDescription: 'Our Cardiology department provides comprehensive care for heart and vascular conditions. From preventative screenings to advanced interventional procedures, our team of board-certified cardiologists utilizes state-of-the-art technology to diagnose and treat coronary artery disease, arrhythmias, heart failure, and valvular disorders.',
    iconName: 'heart',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    commonConditions: [
      'Coronary Artery Disease',
      'Heart Arrhythmias (Afib)',
      'Heart Failure',
      'Valvular Heart Disease',
      'Hypertension'
    ],
    treatments: [
      'Angioplasty and Stenting',
      'Coronary Artery Bypass Grafting (CABG)',
      'Pacemaker Implantation',
      'Cardiac Ablation',
      'Echocardiography'
    ],
    latestAdvancements: 'AI-enhanced cardiac imaging for early detection of arterial plaque and personalized risk assessment algorithms.'
  },
  {
    id: 'neuro',
    name: 'Neurology',
    shortDescription: 'Treating diseases of the brain and spinal cord, peripheral nerves, and muscles.',
    fullDescription: 'The Neurology department specializes in the diagnosis and management of disorders affecting the brain, spinal cord, and peripheral nervous system. Our experts treat a wide range of conditions including stroke, epilepsy, multiple sclerosis, and migraines, employing advanced neuroimaging and diagnostic tools.',
    iconName: 'brain',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    commonConditions: [
      'Stroke (Ischemic and Hemorrhagic)',
      'Epilepsy and Seizure Disorders',
      'Multiple Sclerosis',
      'Parkinson’s Disease',
      'Chronic Migraines'
    ],
    treatments: [
      'Thrombolytic Therapy',
      'Deep Brain Stimulation (DBS)',
      'Antiepileptic Medication Management',
      'Physical Neuro-Rehabilitation',
      'Botox for Migraines'
    ],
    latestAdvancements: 'Brain-Computer Interfaces (BCI) for restoring communication and mobility in paralyzed patients.'
  },
  {
    id: 'peds',
    name: 'Pediatrics',
    shortDescription: 'Medical care of infants, children, and adolescents up to the age of 18.',
    fullDescription: 'Our Pediatrics division is committed to the health and well-being of infants, children, and adolescents. We provide a full spectrum of care ranging from routine well-child visits and immunizations to the management of complex acute and chronic illnesses in a child-friendly environment.',
    iconName: 'child',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    commonConditions: [
      'Childhood Asthma',
      'Otitis Media (Ear Infections)',
      'ADHD and Behavioral Issues',
      'Infectious Diseases (Chickenpox, RSV)',
      'Developmental Delays'
    ],
    treatments: [
      'Routine Immunizations',
      'Nebulizer Therapy',
      'Behavioral Therapy',
      'Growth Monitoring',
      'Antibiotic Stewardship'
    ],
    latestAdvancements: 'Gene therapy breakthroughs for rare pediatric genetic disorders like Spinal Muscular Atrophy (SMA).'
  },
  {
    id: 'ortho',
    name: 'Orthopedics',
    shortDescription: 'Care for the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.',
    fullDescription: 'The Orthopedics department offers specialized care for the musculoskeletal system. Whether dealing with sports injuries, joint replacement needs, or spinal conditions, our multidisciplinary team of surgeons and therapists works collaboratively to restore mobility and reduce pain.',
    iconName: 'bone',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    commonConditions: [
      'Osteoarthritis',
      'Rotator Cuff Tears',
      'ACL and Meniscus Injuries',
      'Scoliosis',
      'Bone Fractures'
    ],
    treatments: [
      'Total Joint Replacement (Hip/Knee)',
      'Arthroscopic Surgery',
      'Spinal Fusion',
      'Physical Therapy & Rehab',
      'Cortisone Injections'
    ],
    latestAdvancements: '3D-printed patient-specific implants for complex bone reconstruction and joint preservation.'
  },
  {
    id: 'derm',
    name: 'Dermatology',
    shortDescription: 'Diagnosis and treatment of conditions related to skin, hair, and nails.',
    fullDescription: 'Our Dermatology practice provides expert medical, surgical, and cosmetic care. We treat common issues such as acne, eczema, and psoriasis, as well as complex skin diseases. We emphasize early detection through comprehensive skin cancer screenings and advanced treatments.',
    iconName: 'skin',
    imageUrl: 'https://picsum.photos/400/300?random=5',
    commonConditions: [
      'Acne Vulgaris',
      'Eczema (Atopic Dermatitis)',
      'Psoriasis',
      'Basal Cell Carcinoma',
      'Rosacea'
    ],
    treatments: [
      'Mohs Micrographic Surgery',
      'Laser Therapy',
      'Cryotherapy',
      'Biologic Therapies',
      'Chemical Peels'
    ],
    latestAdvancements: 'Non-invasive optical biopsy using coherence tomography for painless skin cancer diagnosis.'
  },
  {
    id: 'opth',
    name: 'Ophthalmology',
    shortDescription: 'Surgical and medical diagnosis and treatment of eye disorders.',
    fullDescription: 'The Ophthalmology department delivers total eye care services, from routine vision examinations to complex surgical interventions. Equipped with cutting-edge laser technology, we are dedicated to preserving and restoring vision to enhance our patients\' daily lives.',
    iconName: 'eye',
    imageUrl: 'https://picsum.photos/400/300?random=6',
    commonConditions: [
      'Cataracts',
      'Glaucoma',
      'Macular Degeneration',
      'Diabetic Retinopathy',
      'Dry Eye Syndrome'
    ],
    treatments: [
      'LASIK Eye Surgery',
      'Cataract Extraction with IOL',
      'Intravitreal Injections',
      'Trabeculectomy',
      'Corneal Cross-Linking'
    ],
    latestAdvancements: 'Bionic eye implants (Retinal Prosthesis) and gene therapies for restoring vision in degenerative diseases.'
  }
];

export default function departmentDetail() {
  return (
    <div>
      <Suspense fallback={null}>
        <ErrorNotification />
      </Suspense>
      <DynamicBanner />
      <div className="flex flex-col p-8 max-w-7xl mx-auto w-full gap-16">
        <div>
          <p className="mt-4 mb-12 body-regular text-text-body-subtle max-w-3xl mx-auto text-center">
            Welcome to Highland Medical Center, your premier destination for
            specialized healthcare consultation. Our facility brings together
            exceptional physicians across all major medical departments,
            offering expert diagnosis and personalized treatment planning in one
            convenient location.
          </p>

<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Our Medical Specialties
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Explore our departments to learn how we provide world-class care. 
  
        </p>
      </div>

      <div className="space-y-4">
        {SPECIALTIES.map((specialty) => (
          <SpecialtyCard 
            key={specialty.id} 
            specialty={specialty} 
            isOpen={true}
          />
        ))}
      </div>
    </div>
    </div>
        </div>
      </div>
    
  );
}
