/**
 * Sthhapatya Architects — Projects Dataset
 */
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============ PROJECT DATA ============ */

  var projects = [
    // EXTERIOR DESIGNS (from images/exterior-design/)
    {
      title:"Modern Villa", category:"exterior", tagColor:"var(--amber)",
      location:"Exterior", year:"2024", area:"340 m²",
      desc:"A modern residential exterior with warm evening lighting.",
      images:[
        "images/exterior-design/Exterior render 1.png"
      ]
    },
    {
      title:"Century Heights", category:"exterior", tagColor:"var(--amber)",
      location:"Exterior", year:"2024", area:"1,850 m²",
      desc:"A high-rise residential tower exterior concept.",
      images:[
        "images/exterior-design/Exterior render 2.jpg"
      ]
    },
    {
      title:"Brick Atrium Building", category:"exterior", tagColor:"var(--amber)",
      location:"Exterior", year:"2023", area:"210 m²",
      desc:"An institutional building combining classic brick with modern fenestration.",
      images:[
        "images/exterior-design/Exterior render 3.jpg"
      ]
    },
    {
      title:"Elevated Retreat", category:"exterior", tagColor:"var(--amber)",
      location:"Exterior", year:"2022", area:"480 m²",
      desc:"An elevated cabin surrounded by nature, designed to minimize site impact.",
      images:[
        "images/exterior-design/Exterior render 4.png"
      ]
    },
    {
      title:"Panoramic Vista Residence", category:"exterior", tagColor:"var(--amber)",
      location:"Exterior", year:"2024", area:"520 m²",
      desc:"A luxury modern residence designed with expansive glazing and outdoor integration.",
      images:[
        "images/exterior-design/VIEW 1.jpg"
      ]
    },
    {
      title:"Contemporary Facade Concept", category:"exterior", tagColor:"var(--amber)",
      location:"Exterior", year:"2024", area:"410 m²",
      desc:"A sleek contemporary residential facade exploring geometric volume and materiality.",
      images:[
        "images/exterior-design/RENDER 2.jpg"
      ]
    },
    {
      title:"Architectural Pavilion", category:"exterior", tagColor:"var(--amber)",
      location:"Exterior", year:"2024", area:"390 m²",
      desc:"An architectural concept balancing light, shadow, and structural elegance.",
      images:[
        "images/exterior-design/ChatGPT Image Apr 2, 2026, 09_02_36 PM.png"
      ]
    },
    // INTERIOR DESIGNS (from images/interior-design/)
    {
      title:"Classic Floral Bedroom", category:"interior", tagColor:"var(--sage)",
      location:"Interior", year:"2025", area:"24 m²",
      desc:"An elegant bedroom layout featuring a floral accent wall.",
      images:[
        "images/interior-design/Interior render 1.png"
      ]
    },
    {
      title:"Classic Bedroom Front View", category:"interior", tagColor:"var(--sage)",
      location:"Interior", year:"2025", area:"24 m²",
      desc:"Detailed front view showing symmetry and classic paneling.",
      images:[
        "images/interior-design/Interior render 2.png"
      ]
    },
    {
      title:"Blush Suite Window", category:"interior", tagColor:"var(--sage)",
      location:"Interior", year:"2024", area:"30 m²",
      desc:"A soft blush-toned bedroom with comfortable window seating.",
      images:[
        "images/interior-design/Interior render 3.png"
      ]
    },
    {
      title:"Blush Suite Wardrobe", category:"interior", tagColor:"var(--sage)",
      location:"Interior", year:"2024", area:"30 m²",
      desc:"Spacious built-in wardrobe matching the blush theme.",
      images:[
        "images/interior-design/Interior render 4.png"
      ]
    },
    {
      title:"Luxury Master Suite", category:"interior", tagColor:"var(--sage)",
      location:"Interior", year:"2025", area:"45 m²",
      desc:"Spacious master bedroom with rich textures and gold partitions.",
      images:[
        "images/interior-design/Interior render 5.png"
      ]
    },
    {
      title:"Minimalist Bedroom", category:"interior", tagColor:"var(--sage)",
      location:"Interior", year:"2025", area:"25 m²",
      desc:"Clean lines and minimalist interior approach.",
      images:[
        "images/interior-design/Interior render 6.png"
      ]
    },
    {
      title:"Contemporary Suite", category:"interior", tagColor:"var(--sage)",
      location:"Interior", year:"2025", area:"32 m²",
      desc:"A modern contemporary interior bedroom space.",
      images:[
        "images/interior-design/Interior render 7.png"
      ]
    },
    {
      title:"Tropical Modern Master", category:"interior", tagColor:"var(--sage)",
      location:"Interior", year:"2024", area:"40 m²",
      desc:"A serene bedroom featuring botanical headboard art and soft fabrics.",
      images:[
        "images/interior-design/Interior render 8.png"
      ]
    }
  ];

  /* Updated Category Labels */
  var categoryLabel = {
    exterior:"Exterior Design", 
    interior:"Interior Design"
  };

window.projects = projects;
window.categoryLabel = categoryLabel;
window.reduceMotion = reduceMotion;

