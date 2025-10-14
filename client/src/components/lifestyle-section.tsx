import { Plane, Mountain, Users, TreePine } from "lucide-react";

export default function LifestyleSection() {
  const lifestyleFeatures = [
    {
      image: "/attached_assets/Screen%20Shot%202025-07-08%20at%206.38.41%20pm_1751963926184.png",
      title: "Godfrey's Beach",
      description: "Popular surf beach with golden sand, family facilities, BBQ areas, and penguin viewing platform. Perfect for swimming, surfing, and water sports."
    },
    {
      image: "/assets/The-Nut-Chairlift-Wai-Nang-Poon-131062-300x200_1751957153427.jpg",
      title: "The Nut State Reserve",
      description: "Stanley's iconic 143-meter volcanic plug offering 360-degree panoramic views. Access via chairlift or walking track with spectacular lookouts."
    },
    {
      image: "/assets/447604458_987670320028615_7113507161881837945_n_1751957217997.jpg",
      title: "Stanley Golf Club",
      description: "Nine-hole links-style course established in 1909, set just 10 meters from the ocean with stunning coastal views of Bass Strait."
    },
    {
      image: "/attached_assets/Screen%20Shot%202025-07-08%20at%206.28.59%20pm_1751963949078.png",
      title: "Cradle Mountain",
      description: "Day trip access to Cradle Mountain-Lake St Clair National Park, Tasmania's premier wilderness experience and World Heritage Area."
    }
  ];

  return (
    <section id="lifestyle" className="py-24 md:py-32 bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="mb-6 text-white" style={{ fontFamily: 'Prata, serif' }}>The Stanley Lifestyle</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Experience coastal living at its finest in this tight-knit community where residents take pride in their award-winning tourist town.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lifestyleFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img 
                  src={feature.image} 
                  alt={`${feature.title} Stanley Tasmania - ${feature.description.slice(0, 80)}`}
                  className="rounded-lg shadow-lg mx-auto w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white" style={{ fontFamily: 'Prata, serif' }}>{feature.title}</h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Prata, serif' }}>Gateway to Adventure</h3>
            <p className="text-lg text-gray-300 mb-6">
              Stanley serves as the gateway to the Tarkine wilderness and Cradle Mountain-Lake St Clair National Park, offering endless opportunities for exploration and adventure. 
              With established infrastructure, NBN connectivity, and Wynyard Airport just 40 minutes away providing daily flights to Melbourne, you'll enjoy premium connectivity while living in this pristine coastal paradise where waterfront properties command premium prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center justify-center">
                <Plane className="mr-2" size={20} color="#8B7040" />
                <span>40 min to Wynyard Airport</span>
              </div>
              <div className="flex items-center justify-center">
                <Mountain className="mr-2" size={20} color="#8B7040" />
                <span>Gateway to Tarkine</span>
              </div>
              <div className="flex items-center justify-center">
                <TreePine className="mr-2" size={20} color="#8B7040" />
                <span>Cradle Mountain Day Trips</span>
              </div>
              <div className="flex items-center justify-center">
                <Users className="mr-2" size={20} color="#8B7040" />
                <span>Tight-knit Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
