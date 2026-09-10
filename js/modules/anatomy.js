/* ============================================================
     ARCHITECTURAL ANATOMY STUDIO: UNIFIED CONTROLLER
  ============================================================ */
  (function initAnatomyStudio() {
    var roomData = {
      living: {
        badge: "Contemporary Living & Dining Suite",
        title: "The Anatomy of a Bespoke Living Room",
        sub: "From millimeter-precision CAD furniture blueprints to 2950mm floating TV credenzas, custom mandir jaali niches, and integrated entrance vestibule joinery.",
        watermark: "LIVING ROOM ANATOMY",
        blueprintImg: "images/Living Room story/LIVING ROOM-page-00001.jpg",
        blueprintTitle: "Master 2D Furniture Plan",
        blueprintInspect: "images/Living Room story/LIVING ROOM-page-00001.jpg",
        meta: [
          { label: "Total Living Footprint", val: "44.6 m² / 480 sq.ft" },
          { label: "Design Palette", val: "Natural Smoked Teak, Acoustic Charcoal Fluting & Satin Brass" }
        ],
        views: {
          cover: {
            code: "3D",
            btnLabel: "3D Perspectives",
            pinLabel: "3D OVERVIEW",
            pinPos: { top: "14%", right: "15%" },
            tag: "SHEET 1 OF 4 · 3D PERSPECTIVE VIEWS",
            title: "Living Room 3D Spatial Atmospheres",
            img: "images/interior-design/Interior render 7.png",
            ergo: "Wide open circulation pathways connecting entrance vestibule, living seating, mandir niche, and dining area with zero visual obstruction.",
            materials: "Smoked natural teak veneers, CNC-carved mandir screens, fluted charcoal backdrops, and brushed golden brass hardware.",
            hardware: "Heavy-duty concealed flap-down hinges, concealed wire conduits, integrated LED channels, and push-to-open touch latches.",
            dims: [
              { label: "Room Footprint", mm: "7600 × 5870 mm", imp: "24'11\" × 19'3\"" },
              { label: "Ceiling Height", mm: "2900 mm", imp: "9'6\" slab" },
              { label: "Main Aisle", mm: "1200 mm min", imp: "3'11\" clear" },
              { label: "Total Area", mm: "44.6 m²", imp: "480 sq.ft" }
            ]
          },
          p1: {
            code: "P1",
            btnLabel: "Porch Foyer Bench",
            pinLabel: "P1 · PORCH FOYER",
            pinPos: { top: "82%", left: "24%" },
            tag: "SHEET 2 OF 4 · PORCH & ENTRANCE FOYER",
            title: "Porch Foyer Seating, Safety Door & Shoe Storage",
            img: "images/Living Room story/LIVING ROOM-page-00002.jpg",
            ergo: "Integrated 450mm seat height upholstered bench for effortless shoe wear, flanked by ventilated shoe storage drawers with charcoal louvers.",
            materials: "Teak finish laminate, CNC grooved vertical patti strips in brushed gold, high-density velvet cushioning, and brass safety grill.",
            hardware: "Soft-close telescopic drawer channels, stainless steel pivot hinges on safety door, and concealed magnetic door catches.",
            dims: [
              { label: "Bench Width", mm: "1200 mm", imp: "3'11\" span" },
              { label: "Seat Height", mm: "450 mm", imp: "17.7\" floor" },
              { label: "Shoe Unit Depth", mm: "380 mm", imp: "15.0\" deep" },
              { label: "Safety Door Height", mm: "2150 mm", imp: "7'1\" clear" }
            ]
          },
          p2: {
            code: "P2",
            btnLabel: "Vestibule Partition",
            pinLabel: "P2 · VESTIBULE",
            pinPos: { top: "72%", left: "38%" },
            tag: "SHEET 2 OF 4 · ENTRANCE VESTIBULE & CONSOLE",
            title: "Entrance Vestibule Partition & Mirror Console",
            img: "images/Living Room story/LIVING ROOM-page-00002.jpg",
            ergo: "Semi-private screen filtering living room view from main door, integrated floating key drop ledge at +900mm height with circular backlit mirror.",
            materials: "Charcoal acoustic fluted fins with brass spacer rods, tinted bronze glass inserts, and smoked teak veneer ledge.",
            hardware: "Floor-to-ceiling concealed structural tie rods, 2700K indirect halo LED strip, and concealed wireless charger recess.",
            dims: [
              { label: "Partition Height", mm: "2700 mm", imp: "8'10\" full" },
              { label: "Console Ledge", mm: "900 × 300 mm", imp: "35\" × 12\"" },
              { label: "Mirror Diameter", mm: "750 mm Ø", imp: "29.5\" round" },
              { label: "Fin Spacing", mm: "75 mm C/C", imp: "3.0\" gap" }
            ]
          },
          p3: {
            code: "P3",
            btnLabel: "TV Unit & Fluted Wall",
            pinLabel: "P3 · TV UNIT",
            pinPos: { top: "42%", left: "34%" },
            tag: "SHEET 3 OF 4 · TV UNIT DETAILS",
            title: "75\" TV Feature Wall & 2950mm Floating Credenza",
            img: "images/Living Room story/LIVING ROOM-page-00003.jpg",
            ergo: "2950mm wide floating TV console at +450mm height with 1100mm optical screen center aligned to sofa eye-level. 3 deep AV equipment drawers with acoustic fabric backing.",
            materials: "Smoked natural teak veneer backing, vertical charcoal fluted MDF paneling, matte charcoal PU-finished credenza drawers, and concealed 3000K warm LED profile lighting.",
            hardware: "Heavy-duty concealed flap-down hinges with hydraulic dampening, wire management channels with brush grommets, and remote-friendly IR repeater backing.",
            dims: [
              { label: "Credenza Length", mm: "2950 mm", imp: "9'8\" span" },
              { label: "Unit Depth", mm: "400 mm", imp: "15.7\" deep" },
              { label: "Floor Clearance", mm: "450 mm", imp: "17.7\" float" },
              { label: "Screen Center", mm: "1100 mm", imp: "43.3\" optical" }
            ]
          },
          p4: {
            code: "P4",
            btnLabel: "Dining & Handwash",
            pinLabel: "P4 · DINING & WASH",
            pinPos: { top: "38%", right: "32%" },
            tag: "SHEET 4 OF 4 · DINING & HANDWASH JOINERY",
            title: "Dining Suite Credenza & Integrated Handwash Counter",
            img: "images/Living Room story/LIVING ROOM-page-00004.jpg",
            ergo: "850mm dining counter height with dedicated water-resistant quartz handwash basin, 6-seater dining circulation buffer of 900mm around chairs.",
            materials: "Nano-coated quartz countertop, anti-splash fluted composite backdrop, smoked oak cabinetry, and brushed gold sensor faucet.",
            hardware: "Concealed bottle-trap plumbing access panel, Blum soft-close cutlery pullouts, and touchless infrared LED sensor.",
            dims: [
              { label: "Counter Length", mm: "2100 mm", imp: "6'11\" span" },
              { label: "Counter Depth", mm: "550 mm", imp: "21.6\" deep" },
              { label: "Basin Height", mm: "850 mm", imp: "33.5\" datum" },
              { label: "Aisle Buffer", mm: "900 mm min", imp: "35.4\" clear" }
            ]
          },
          p5: {
            code: "P5",
            btnLabel: "Mandir Unit & Jaali",
            pinLabel: "P5 · MANDIR",
            pinPos: { top: "22%", right: "18%" },
            tag: "SHEET 4 OF 4 · SACRED MANDIR JOINERY",
            title: "Sacred Mandir Joinery, Jaali Screen & Diya Drawers",
            img: "images/Living Room story/LIVING ROOM-page-00004.jpg",
            ergo: "Elevated pooja pedestal at +450mm with pull-out brass-inlaid diya tray (350mm extension) and upper storage for pooja samagri.",
            materials: "White Corian altar with back-lit CNC carved sacred jaali, gold leaf detailing, and warm teak wood frame.",
            hardware: "Full-extension heavy duty brass drawer slides, integrated bell hooks, and smoke-filtered low-heat 2400K LED coves.",
            dims: [
              { label: "Mandir Width", mm: "1200 mm", imp: "3'11\" span" },
              { label: "Unit Height", mm: "2400 mm", imp: "7'10\" total" },
              { label: "Altar Height", mm: "450 mm", imp: "17.7\" floor" },
              { label: "Diya Pullout", mm: "350 mm Ext", imp: "13.8\" tray" }
            ]
          },
          p6: {
            code: "P6",
            btnLabel: "Common Wash Basin",
            pinLabel: "P6 · COMMON BASIN",
            pinPos: { top: "62%", right: "18%" },
            tag: "SHEET 4 OF 4 · COMMON WASH BASIN DETAILS",
            title: "Common Wash Basin Vanity & Mirror Cabinet",
            img: "images/Living Room story/LIVING ROOM-page-00004.jpg",
            ergo: "Compact floating vanity unit with concealed plumbing and dual-tier mirrored cabinet with eye-level toiletry storage.",
            materials: "Stain-resistant solid quartz basin with seamless under-mount joinery and moisture-resistant marine ply carcass.",
            hardware: "Push-to-open mirror doors, anti-fog heater film behind mirror, and brushed gold floor-drain cover.",
            dims: [
              { label: "Vanity Width", mm: "900 mm", imp: "2'11\" width" },
              { label: "Basin Datum", mm: "850 mm", imp: "33.5\" height" },
              { label: "Mirror Height", mm: "1000 mm", imp: "39.4\" tall" },
              { label: "Depth", mm: "450 mm", imp: "17.7\" slim" }
            ]
          }
        },
        defaultView: "p3",
        craftMatrix: [
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>', title: "Acoustic Fluted Paneling", desc: "High-density 18mm fluted acoustic wall paneling minimizes living room flutter echo while adding rich tactile warmth behind the TV unit." },
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>', title: "CNC Brass Mandir Jaali", desc: "Precision water-jet cut brass fretwork panels with sacred geometry framing the sanctum while allowing incense and light diffusion." },
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', title: "Cantilevered Joinery", desc: "Heavy-duty concealed steel wall brackets support 2950mm TV console and entrance vanity with 120kg load capacity and zero ground footers." },
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', title: "Concealed Cove LEDs", desc: "Indirect 2700K warm tunable LED cove profiles recessed behind fluted panel edges for glare-free evening illumination and ambiance." }
        ]
      },
      kitchen: {
        badge: "Contemporary Modular Kitchen Suite",
        title: "The Anatomy of a Bespoke Kitchen",
        sub: "From millimeter-precision CAD furniture blueprints to custom hardware, Gola handle-less profiles, and dynamic elevation ergonomics.",
        watermark: "KITCHEN ANATOMY",
        blueprintImg: "images/Kitchen Story/KITCHEN-page-00002.jpg",
        blueprintTitle: "Master 2D CAD Layout Plan",
        blueprintInspect: "images/Kitchen Story/KITCHEN-page-00002.jpg",
        meta: [
          { label: "Total Kitchen Footprint", val: "4.7m × 4.82m / 244 sq.ft" },
          { label: "Primary Finish", val: "Matte Acrylic / PU & Smoked Oak" }
        ],
        views: {
          cover: {
            code: "3D",
            btnLabel: "3D Perspectives",
            pinLabel: "3D OVERVIEW",
            pinPos: { top: "10%", right: "10%" },
            tag: "SHEET 1 OF 5 · 3D PERSPECTIVES",
            title: "Kitchen 3D Spatial Atmospheres & Materiality",
            img: "images/Kitchen Story/KITCHEN-page-00001.jpg",
            ergo: "Holistic 4.7m × 4.82m spatial distribution separating wet prep, active cooking, social island dining, and tall appliance storage for fluid circulation.",
            materials: "Sage Green matte PU lacquer, matte composite countertop surfaces, warm white oak accents, fluted glass, and industrial black metal ceiling trellis.",
            hardware: "Complete integrated smart kitchen suite including concealed dishwasher, ergonomic oven tower, and suspended biophilic planter.",
            dims: [
              { label: "Total Footprint", mm: "4700 × 4820 mm", imp: "15'5\" × 15'10\"" },
              { label: "Floor Area", mm: "22.6 m²", imp: "244 sq.ft" },
              { label: "Island Dimensions", mm: "2000 × 650 mm", imp: "6'7\" × 2'2\"" },
              { label: "Clear Aisle Width", mm: "1050 mm min", imp: "41.3\" walk" }
            ]
          },
          v1: {
            code: "V1",
            btnLabel: "Sink Wall & Window",
            pinLabel: "V1 · SINK WALL",
            pinPos: { top: "24%", left: "45%" },
            tag: "ELEVATION V1 · SINK WALL",
            title: "Sink Counter & Dishwasher Integration",
            img: "images/interior-design/Interior render 1.png",
            ergo: "Counter placed at +860mm datum. 600mm clear prep zone flanking double bowl sink. Natural light from bay window minimizes daytime shadow on preparation area.",
            materials: "Calacatta Gold Quartz countertop (20mm thickness, mitred apron), matte sage anti-fingerprint laminate base cabinets, natural fluted oak veneer overheads.",
            hardware: "Hafele soft-close under-mount slides (45kg capacity), integrated stainless steel pull-out trash sorting bin with carbon filter, pull-out detergent caddy.",
            dims: [
              { label: "Counter Datum", mm: "860 mm", imp: "33.8\" floor" },
              { label: "Counter Depth", mm: "650 mm", imp: "25.6\" deep" },
              { label: "Sink Bowl Span", mm: "800 × 450 mm", imp: "31.5\" × 17.7\"" },
              { label: "Overhead Height", mm: "600 mm clear", imp: "23.6\" clearance" }
            ]
          },
          v2: {
            code: "V2",
            btnLabel: "Hob & Chimney Wall",
            pinLabel: "V2 · COOKING HOB",
            pinPos: { top: "45%", right: "18%" },
            tag: "ELEVATION V2 · HOB & CHIMNEY",
            title: "Cooking Hob Wall, Spice Pullouts & Extraction",
            img: "images/Kitchen Story/KITCHEN-page-00004.jpg",
            ergo: "Direct access to twin 200mm spice pullouts flanking 4-burner induction cooktop. 750mm clearance between hob and high-suction baffle chimney.",
            materials: "Heat-resistant toughened glass splashback, charcoal anodized aluminum Gola profile J-pulls, and BWP marine ply carcass.",
            hardware: "Blum Tandembox drawer systems with division matrix for heavy cookware, soft-closing gas dampers, and heat-resistant silicone seals.",
            dims: [
              { label: "Hob Span", mm: "780 × 520 mm", imp: "30.7\" × 20.5\"" },
              { label: "Chimney Clearance", mm: "750 mm", imp: "29.5\" height" },
              { label: "Spice Pullouts (2×)", mm: "200 mm each", imp: "7.9\" width" },
              { label: "Pot Drawers (3×)", mm: "900 mm width", imp: "35.4\" wide" }
            ]
          },
          v3: {
            code: "V3",
            btnLabel: "Breakfast Island",
            pinLabel: "V3 · BREAKFAST ISLAND",
            pinPos: { top: "56%", left: "45%" },
            tag: "ELEVATION V3 · BREAKFAST ISLAND",
            title: "Social Breakfast Island & Suspended Planter",
            img: "images/Kitchen Story/KITCHEN-page-00005.jpg",
            ergo: "2000mm × 650mm curved breakfast counter featuring an R325 corner radius for fluid circulation. Counter height set to 900mm with a 150mm overhang for barstool knee clearance.",
            materials: "Hand-turned solid timber fluted support column paired with black powder-coated suspended industrial ceiling trellis for indoor herbs and ambient biophilic greenery.",
            hardware: "Internal tiered cutlery and dish organizer drawers with Blum soft-close sliders, supporting up to 45kg dynamic load.",
            dims: [
              { label: "Island Length", mm: "2000 mm", imp: "6'7\" span" },
              { label: "Island Width", mm: "650 mm", imp: "25.6\" depth" },
              { label: "Radius Corner", mm: "R325 mm", imp: "12.8\" curve" },
              { label: "Knee Recess", mm: "150 mm", imp: "5.9\" overhang" }
            ]
          },
          v4: {
            code: "V4",
            btnLabel: "Fluted Glass Crockery",
            pinLabel: "V4 · CROCKERY WALL",
            pinPos: { bottom: "12%", right: "35%" },
            tag: "ELEVATION V4 · CROCKERY WALL",
            title: "Fluted Glass Crockery Unit & Bar Display",
            img: "images/Kitchen Story/KITCHEN-page-00006.jpg",
            ergo: "Full-height illuminated crockery cabinet with touchless sensor lighting. Lower drawers for dinnerware; upper fluted glass for glassware.",
            materials: "Aluminum slim-profile black anodized frames with reeded tempered glass and warm oak veneer interior backing.",
            hardware: "110° wide-opening Blum clip-top Blumotion hinges, touchless optical sensor switch, and concealed cable routing.",
            dims: [
              { label: "Unit Width", mm: "1500 mm", imp: "4'11\" span" },
              { label: "Unit Height", mm: "2400 mm", imp: "7'10\" total" },
              { label: "Depth", mm: "400 mm", imp: "15.7\" slim" },
              { label: "Glass Leaf (3×)", mm: "500 mm / shutter", imp: "19.7\" width" }
            ]
          },
          v5: {
            code: "V5",
            btnLabel: "Appliance Tower",
            pinLabel: "V5 · APPLIANCE TOWER",
            pinPos: { top: "48%", left: "20%" },
            tag: "ELEVATION V5 · APPLIANCE TOWER",
            title: "Built-in Oven, Microwave & Pantry Tower",
            img: "images/Kitchen Story/KITCHEN-page-00007.jpg",
            ergo: "Eye-level microwave (+1350mm) and ergonomic oven placement (+900mm) eliminate bending. Adjacent 600mm tall tandem pantry with 6 internal baskets.",
            materials: "Matte Sage PU finish with anti-heat vent baffles and marine-grade calibrated carcass.",
            hardware: "High-capacity Blum Space Tower tandem pantry runners with 70kg payload rating per shelf.",
            dims: [
              { label: "Tower Height", mm: "2400 mm", imp: "7'10\" full" },
              { label: "Oven Cutout", mm: "600 × 600 mm", imp: "23.6\" × 23.6\"" },
              { label: "Microwave Cutout", mm: "600 × 450 mm", imp: "23.6\" × 17.7\"" },
              { label: "Pantry Width", mm: "600 mm", imp: "23.6\" width" }
            ]
          }
        },
        defaultView: "v3",
        craftMatrix: [
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>', title: "BWP Marine Grade Plywood", desc: "710-grade boiling waterproof ply with phenolic resin bonding prevents delamination across moisture-heavy sink and hob zones." },
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>', title: "Gola Aluminium Channel", desc: "Seamless horizontal J-pull and C-pull anodized dark charcoal Gola profiles provide flush handle-free aesthetics without grease entrapment." },
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', title: "Blumotion Soft-Close Motion", desc: "Blum Aventos HK-XS stay lifts for overheads with TIP-ON mechanical opening support and silent hydraulic deceleration." },
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', title: "3000K Diffused Task Lighting", desc: "Continuous 45° angled aluminum LED profiles recessed beneath all overhead cabinets eliminate shadows across prep zones." }
        ]
      },
      bedroom: {
        badge: "Contemporary Bedroom Suite",
        title: "The Anatomy of a Bespoke Bedroom Suite",
        sub: "From millimeter-precision CAD furniture blueprints to 2200mm full-height wardrobe joinery, hydraulic lofts, and integrated vanity dressing elevations.",
        watermark: "BEDROOM ANATOMY",
        blueprintImg: "images/Bed Room Story/SANJEET BEDROOM-page-00002.jpg",
        blueprintTitle: "Master 2D Furniture Plan",
        blueprintInspect: "images/Bed Room Story/SANJEET BEDROOM-page-00002.jpg",
        meta: [
          { label: "Total Bedroom Footprint", val: "14.5 m² / 156 sq.ft" },
          { label: "Design Palette", val: "Smoked Teak, Acoustic Fluting & Laminate APS" }
        ],
        views: {
          cover: {
            code: "01",
            btnLabel: "3D Perspectives",
            pinLabel: "3D OVERVIEW",
            pinPos: { top: "12%", right: "14%" },
            tag: "SHEET 1 OF 5 · 3D PERSPECTIVE VIEWS",
            title: "Sanjeet Bedroom 3D Spatial Atmospheres",
            img: "images/Bed Room Story/SANJEET BEDROOM-page-00001.jpg",
            ergo: "Contemporary bedroom suite harmonizing ergonomic queen bed with acoustic fluted feature wall, floating vanity dresser, and full-height continuous storage wardrobe.",
            materials: "Smoked teak textures, vertical fluted paneling, matte charcoal surfaces, and concealed 2700K warm cove backlighting.",
            hardware: "Concealed touch-latches, soft-close drawer slides, integrated LED profiles, and heavy-duty wardrobe tensioners.",
            dims: [
              { label: "Room Footprint", mm: "3800 × 3800 mm", imp: "12'6\" × 12'6\"" },
              { label: "Bed Mattress", mm: "1665 × 2150 mm", imp: "5'6\" × 7'1\"" },
              { label: "Wardrobe Length", mm: "2200 mm", imp: "7'3\" span" },
              { label: "Loft Clearance", mm: "700 mm", imp: "2'4\" height" }
            ]
          },
          b1: {
            code: "02",
            btnLabel: "2D Furniture Plan",
            pinLabel: "2D PLAN · BED",
            pinPos: { top: "48%", left: "42%" },
            tag: "SHEET 2 OF 5 · MASTER 2D FURNITURE PLAN",
            title: "Master 2D Furniture Layout & Spatial Blueprint",
            img: "images/Bed Room Story/SANJEET BEDROOM-page-00002.jpg",
            ergo: "Millimeter-accurate furniture plan maximizing circulation flow. 1665×2150mm bed with dual pull-out drawers and hydraulic openable panels, flanked by 650mm dressing unit and 2200mm wardrobe.",
            materials: "Bespoke moisture-resistant ply carcasses, premium laminate finishes, polished edge wall mirror, and aluminum floor trims.",
            hardware: "High-load concealed drawer runners, 110° wide-opening cabinet hinges, and pneumatic bed lift mechanism.",
            dims: [
              { label: "Bed Outer Frame", mm: "1665 × 2150 mm", imp: "5'6\" × 7'1\"" },
              { label: "Dressing Side Table", mm: "650 × 450 mm", imp: "2'2\" × 1'6\"" },
              { label: "Right Side Table", mm: "450 × 450 mm", imp: "1'6\" × 1'6\"" },
              { label: "Wardrobe Footprint", mm: "2200 × 650 mm", imp: "7'3\" × 2'2\"" }
            ]
          },
          b2: {
            code: "03",
            btnLabel: "Wardrobe Elevation",
            pinLabel: "WARDROBE ELEV",
            pinPos: { top: "48%", right: "18%" },
            tag: "SHEET 3 OF 5 · WARDROBE ELEVATION & LOFT",
            title: "Full-Height 2200mm Wardrobe Elevation & Hydraulic Loft",
            img: "images/Bed Room Story/SANJEET BEDROOM-page-00003.jpg",
            ergo: "4-panel wardrobe elevation with 550mm shutter widths for optimal swing clearance. Integrated 800×700mm top hydraulic loft and 3 deep 1100mm wide external drawers for seamless access.",
            materials: "Laminate APS finish over commercial ply, continuous 25mm concealed finger-pull grooves with matching laminate lining, and 50mm recessed bottom plinth.",
            hardware: "Heavy-duty hydraulic gas struts for overhead loft flap, 35kg rated bottom drawer runners, and soft-close shutter hinges.",
            dims: [
              { label: "Total Wardrobe Span", mm: "2200 mm", imp: "7'3\" (4 Shutters)" },
              { label: "Upper Shutter Height", mm: "1725 mm", imp: "5'8\" Tall Doors" },
              { label: "External Drawers (3×)", mm: "1100 × 235 mm each", imp: "3'7\" × 9.2\"" },
              { label: "Hydraulic Top Loft", mm: "800 × 700 mm", imp: "2'7\" × 2'4\"" }
            ]
          },
          b3: {
            code: "04",
            btnLabel: "Wardrobe Carcass",
            pinLabel: "CARCASS & DRAWERS",
            pinPos: { bottom: "20%", right: "18%" },
            tag: "SHEET 4 OF 5 · INTERNAL CARCASS & STORAGE",
            title: "Wardrobe Internal Carcass, Hanger & Drawer Dimensions",
            img: "images/Bed Room Story/SANJEET BEDROOM-page-00004.jpg",
            ergo: "Optimized internal zoning: 1970mm vertical hanging bay for long garments, 715mm dedicated trouser rack, 2 internal accessory drawers (240mm), and 4 tiers of adjustable shelves.",
            materials: "Durable textured carcass laminate on MR ply, aluminum oval hanger rods with silicone damping strip, and precision 35×25mm edge details.",
            hardware: "Full-extension synchronized concealed under-mount slides, pull-out trouser organizer with anti-slip silicone rings, and sensor LED strips.",
            dims: [
              { label: "Hydraulic Loft Drop", mm: "700 mm", imp: "2'4\" Overhead" },
              { label: "Long Hanger Section", mm: "1970 mm Drop", imp: "6'6\" Vertical" },
              { label: "Internal Shelves (4×)", mm: "500 / 480 mm", imp: "1'8\" Spacing" },
              { label: "Trouser Pull-Out", mm: "715 mm Height", imp: "2'4\" Rack" }
            ]
          },
          b4: {
            code: "05",
            btnLabel: "Dressing Unit & S1",
            pinLabel: "DRESSING & SEC S1",
            pinPos: { top: "26%", left: "16%" },
            tag: "SHEET 5 OF 5 · BED & DRESSING SECTION S1",
            title: "Bed & Dressing Elevation, Section S1 & Joinery Plan",
            img: "images/Bed Room Story/SANJEET BEDROOM-page-00005.jpg",
            ergo: "Section S1 vertical shelving tower with equal compartment heights, dual 195/200mm bottom vanity drawers, 650mm dressing counter, 500mm angled corner ledge, and bed base with two pull-out side drawers.",
            materials: "High-grade marine ply boxing with laminate finish, polished circular mirror with concealed 2700K cove lighting, and acoustic fluted wall backdrop.",
            hardware: "Soft-close vanity drawer slides, concealed shelf support dowels, and integrated halo LED warm illumination channel.",
            dims: [
              { label: "Dressing Counter", mm: "650 mm Width", imp: "2'2\" Vanity" },
              { label: "Corner Angled Ledge", mm: "500 mm Span", imp: "1'8\" Shelf" },
              { label: "Section S1 Shelves", mm: "6 Equal Tiers (EQ)", imp: "Full Height" },
              { label: "Dual Vanity Drawers", mm: "195 mm + 200 mm", imp: "8\" + 8\" Deep" }
            ]
          }
        },
        defaultView: "b1",
        craftMatrix: [
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>', title: "Acoustic Fluted Paneling", desc: "24mm vertical fluting paneling creates a tactile architectural backdrop behind the bed headboard with integrated sconce backlighting." },
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>', title: "2200mm 4-Shutter Wardrobe", desc: "Full-height 4-panel wardrobe (550mm leaves) with continuous 25mm concealed finger grooves and an 800×700mm overhead hydraulic loft." },
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', title: "Integrated Dressing Vanity", desc: "650mm counter with 500mm corner angled ledge, circular backlit vanity mirror, and dual 195/200mm soft-close drawers in Section S1." },
          { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', title: "Hydraulic Lift & Pullout Bed", desc: "1665×2150mm bed frame featuring hydraulic openable top panels combined with dual side pull-out drawers for maximized storage." }
        ]
      }
    };

    var currentRoom = "living";
    var currentView = "p3";
    var isDrawerOpen = false;

    // DOM References
    var drawer = document.getElementById('asDrawerContent');
    var toggleHeader = document.getElementById('asToggleHeader');
    var expandPill = document.getElementById('asExpandPill');
    var pillText = document.getElementById('asPillText');
    var bottomBtnText = document.getElementById('asBottomBtnText');
    var projectBadge = document.getElementById('asProjectBadge');
    var toggleTitle = document.getElementById('asToggleTitle');
    var toggleSub = document.getElementById('asToggleSub');
    var watermark = document.getElementById('asWatermark');
    var metaStrip = document.getElementById('asMetaStrip');
    var roomTabs = document.getElementById('asRoomTabs');
    var blueprintTitle = document.getElementById('asBlueprintColTitle') || document.getElementById('asBlueprintTitle');
    var blueprintImg = document.getElementById('asBlueprintImg');
    var sightlineOverlay = document.getElementById('asSightlineOverlay');
    var sightlineNav = document.getElementById('asSightlineNav');
    var dimHud = document.getElementById('asDimHud');
    var craftMatrix = document.getElementById('asCraftMatrix');

    // Stage DOM
    var stageTag = document.getElementById('asStageTag');
    var stageTitle = document.getElementById('asStageTitle');
    var stageImg = document.getElementById('asStageImg');
    var panCanvas = document.getElementById('asPanCanvas');
    var stageViewport = document.getElementById('asStageViewport');
    var btnDirectImage = document.getElementById('asBtnDirectImage');
    var btnInspectStage = document.getElementById('asBtnInspectStage');
    var btnInspectPlan = document.getElementById('asBtnInspectPlan');
    var zoomLevelDisplay = document.getElementById('asZoomLevel');
    var zoomInBtn = document.getElementById('asZoomIn');
    var zoomOutBtn = document.getElementById('asZoomOut');
    var zoomResetBtn = document.getElementById('asZoomReset');

    // Detail texts
    var detailErgo = document.getElementById('asDetailErgo');
    var detailMaterials = document.getElementById('asDetailMaterials');
    var detailHardware = document.getElementById('asDetailHardware');

    // Modal DOM
    var modal = document.getElementById('asLightboxModal');
    var modalImg = document.getElementById('asModalImg');
    var modalCanvas = document.getElementById('asModalCanvas');
    var modalBody = document.getElementById('asModalBody');
    var modalTitle = document.getElementById('asModalTitle');
    var modalBtnDirectImage = document.getElementById('asModalBtnDirectImage');
    var modalClose = document.getElementById('asModalClose');
    var modalZoomIn = document.getElementById('asModalZoomIn');
    var modalZoomOut = document.getElementById('asModalZoomOut');
    var modalZoomReset = document.getElementById('asModalZoomReset');
    var modalZoomLevelDisplay = document.getElementById('asModalZoomLevel');

    // Stage Zoom & Pan State
    var stageScale = 1;
    var stagePanX = 0;
    var stagePanY = 0;
    var isStagePanning = false;
    var stageStartX = 0;
    var stageStartY = 0;
    var stageBaseW = 0;
    var stageBaseH = 0;

    // Modal Zoom & Pan State
    var modalScale = 1;
    var modalPanX = 0;
    var modalPanY = 0;
    var isModalPanning = false;
    var modalStartX = 0;
    var modalStartY = 0;
    var modalBaseW = 0;
    var modalBaseH = 0;
    var modalZoom1to1 = document.getElementById('asModalZoom1to1');

    function computeStageBaseSize() {
      if (!stageViewport || !stageImg) return;
      var availW = (stageViewport.clientWidth || 600) * 0.94;
      var availH = (stageViewport.clientHeight || 460) * 0.92;
      var natW = stageImg.naturalWidth || 1920;
      var natH = stageImg.naturalHeight || 1080;
      var fitRatio = Math.min(availW / natW, availH / natH, 1);
      stageBaseW = Math.max(Math.round(natW * fitRatio), 150);
      stageBaseH = Math.max(Math.round(natH * fitRatio), 150);
    }

    function applyStageTransform() {
      if (!panCanvas || !stageImg) return;
      if (!stageBaseW) computeStageBaseSize();

      if (stageBaseW > 0 && stageBaseH > 0) {
        var targetW = Math.round(stageBaseW * stageScale);
        var targetH = Math.round(stageBaseH * stageScale);
        stageImg.style.width = targetW + 'px';
        stageImg.style.height = targetH + 'px';
        stageImg.style.maxWidth = 'none';
        stageImg.style.maxHeight = 'none';
      }
      panCanvas.style.transform = 'translate(' + stagePanX + 'px, ' + stagePanY + 'px)';
      if (zoomLevelDisplay) {
        zoomLevelDisplay.textContent = Math.round(stageScale * 100) + '%';
      }
    }

    function resetStageZoom() {
      stageScale = 1;
      stagePanX = 0;
      stagePanY = 0;
      computeStageBaseSize();
      applyStageTransform();
    }

    function computeModalBaseSize() {
      if (!modalBody || !modalImg) return;
      var availW = (modalBody.clientWidth || window.innerWidth) * 0.90;
      var availH = (modalBody.clientHeight || (window.innerHeight - 80)) * 0.85;
      var natW = modalImg.naturalWidth || 1920;
      var natH = modalImg.naturalHeight || 1080;
      var fitRatio = Math.min(availW / natW, availH / natH, 1);
      modalBaseW = Math.max(Math.round(natW * fitRatio), 200);
      modalBaseH = Math.max(Math.round(natH * fitRatio), 200);
    }

    function applyModalTransform() {
      if (!modalCanvas || !modalImg) return;
      if (!modalBaseW) computeModalBaseSize();

      if (modalBaseW > 0 && modalBaseH > 0) {
        var targetW = Math.round(modalBaseW * modalScale);
        var targetH = Math.round(modalBaseH * modalScale);
        modalImg.style.width = targetW + 'px';
        modalImg.style.height = targetH + 'px';
        modalImg.style.maxWidth = 'none';
        modalImg.style.maxHeight = 'none';
      }
      modalCanvas.style.transform = 'translate(' + modalPanX + 'px, ' + modalPanY + 'px)';
      if (modalZoomLevelDisplay) {
        modalZoomLevelDisplay.textContent = Math.round(modalScale * 100) + '%';
      }
    }

    function resetModalZoom() {
      modalScale = 1;
      modalPanX = 0;
      modalPanY = 0;
      computeModalBaseSize();
      applyModalTransform();
    }

    // Switch Room
    function switchRoom(roomKey, viewKey) {
      if (!roomData[roomKey]) return;
      currentRoom = roomKey;
      var r = roomData[roomKey];

      // 1. Header & Text
      if (projectBadge) {
        projectBadge.textContent = r.badge;
        if (roomKey === 'living') {
          projectBadge.style.color = 'var(--amber)';
          projectBadge.style.borderColor = 'rgba(232, 162, 39, 0.25)';
          projectBadge.style.background = 'rgba(232, 162, 39, 0.12)';
        } else if (roomKey === 'kitchen') {
          projectBadge.style.color = 'var(--sage)';
          projectBadge.style.borderColor = 'rgba(79, 122, 91, 0.25)';
          projectBadge.style.background = 'rgba(79, 122, 91, 0.12)';
        } else if (roomKey === 'bedroom') {
          projectBadge.style.color = '#6366f1';
          projectBadge.style.borderColor = 'rgba(99, 102, 241, 0.25)';
          projectBadge.style.background = 'rgba(99, 102, 241, 0.12)';
        }
      }
      if (toggleTitle) toggleTitle.textContent = r.title;
      if (toggleSub) toggleSub.textContent = r.sub;
      if (watermark) watermark.textContent = r.watermark;

      // 2. Room Tabs State
      if (roomTabs) {
        roomTabs.querySelectorAll('.as-tab-btn').forEach(function(btn) {
          var active = btn.getAttribute('data-room') === roomKey;
          btn.classList.toggle('is-active', active);
          btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
      }

      // 3. Meta Badges Strip
      if (metaStrip) {
        metaStrip.innerHTML = r.meta.map(function(m) {
          return '<div class="as-meta-item"><span class="as-meta-label">' + m.label + '</span><strong class="as-meta-val">' + m.val + '</strong></div>';
        }).join('');
      }

      // 4. Blueprint Left Column
      if (blueprintTitle) blueprintTitle.textContent = r.blueprintTitle;
      if (blueprintImg) {
        blueprintImg.src = r.blueprintImg;
        blueprintImg.alt = r.title + " Plan";
      }

      // 5. Sightline Hotspot Pins
      if (sightlineOverlay) {
        sightlineOverlay.innerHTML = Object.keys(r.views).map(function(vKey) {
          var v = r.views[vKey];
          var posStyles = Object.keys(v.pinPos).map(function(pk) {
            return pk + ': ' + v.pinPos[pk] + ';';
          }).join(' ');
          return '<button type="button" class="as-sightline-pin pin-' + vKey + '" data-view="' + vKey + '" style="' + posStyles + '" aria-label="' + v.pinLabel + '"><span class="pin-pulse"></span><span class="pin-label">' + v.pinLabel + '</span></button>';
        }).join('');

        // Attach pin events
        sightlineOverlay.querySelectorAll('.as-sightline-pin').forEach(function(pin) {
          pin.addEventListener('click', function(e) {
            e.stopPropagation();
            var targetView = this.getAttribute('data-view');
            switchView(targetView);
          });
        });
      }

      // 6. Sightline Nav Chips
      if (sightlineNav) {
        sightlineNav.innerHTML = Object.keys(r.views).map(function(vKey) {
          var v = r.views[vKey];
          return '<button type="button" class="as-nav-chip" data-view="' + vKey + '"><span class="as-chip-code">' + v.code + '</span><span>' + v.btnLabel + '</span></button>';
        }).join('');

        // Attach chip events
        sightlineNav.querySelectorAll('.as-nav-chip').forEach(function(chip) {
          chip.addEventListener('click', function(e) {
            e.stopPropagation();
            var targetView = this.getAttribute('data-view');
            switchView(targetView);
          });
        });
      }

      // 7. Craft Matrix
      if (craftMatrix) {
        craftMatrix.innerHTML = r.craftMatrix.map(function(c) {
          return '<div class="as-craft-card"><div class="as-craft-icon">' + c.icon + '</div><h4 class="as-craft-title">' + c.title + '</h4><p class="as-craft-desc">' + c.desc + '</p></div>';
        }).join('');
      }

      // 8. Switch to requested view or default
      var targetView = viewKey && r.views[viewKey] ? viewKey : r.defaultView;
      switchView(targetView);
    }

    // Switch Sheet / View Viewport
    function switchView(viewKey) {
      var r = roomData[currentRoom];
      if (!r || !r.views[viewKey]) return;
      currentView = viewKey;
      var v = r.views[viewKey];

      // Update Topbar
      if (stageTag) stageTag.textContent = v.tag;
      if (stageTitle) stageTitle.textContent = v.title;
      if (stageImg) {
        stageBaseW = 0;
        stageBaseH = 0;
        stageImg.src = v.img;
        stageImg.alt = v.title;
        stageImg.onload = function() {
          computeStageBaseSize();
          resetStageZoom();
        };
      }
      if (btnDirectImage) {
        btnDirectImage.href = v.img;
      }

      // Update Insights
      if (detailErgo) detailErgo.textContent = v.ergo;
      if (detailMaterials) detailMaterials.textContent = v.materials;
      if (detailHardware) detailHardware.textContent = v.hardware;

      // Update Dimensions HUD
      if (dimHud) {
        dimHud.innerHTML = v.dims.map(function(d) {
          return '<div class="as-dim-card"><span class="as-dim-label">' + d.label + '</span><span class="as-dim-mm">' + d.mm + '</span><span class="as-dim-imperial">' + d.imp + '</span></div>';
        }).join('');
      }

      // Highlight active Pin & Chip
      if (sightlineOverlay) {
        sightlineOverlay.querySelectorAll('.as-sightline-pin').forEach(function(pin) {
          var active = pin.getAttribute('data-view') === viewKey;
          pin.classList.toggle('is-active', active);
        });
      }
      if (sightlineNav) {
        sightlineNav.querySelectorAll('.as-nav-chip').forEach(function(chip) {
          var active = chip.getAttribute('data-view') === viewKey;
          chip.classList.toggle('is-active', active);
        });
      }

      // Reset Pan/Zoom on view switch
      resetStageZoom();
    }

    // Drawer Toggle Logic
    function openDrawer(scrollIntoView) {
      isDrawerOpen = true;
      var section = document.getElementById('anatomy-studio');
      if (section) section.classList.add('is-open');
      if (drawer) drawer.classList.add('is-open');
      if (toggleHeader) {
        toggleHeader.setAttribute('aria-expanded', 'true');
        toggleHeader.classList.add('is-expanded');
      }
      if (expandPill) expandPill.classList.add('is-open');
      if (pillText) pillText.textContent = "Hide Details";
      if (bottomBtnText) bottomBtnText.textContent = "Hide Room Details";

      if (scrollIntoView) {
        var targetSec = section || document.getElementById('anatomy-studio');
        if (targetSec) {
          var offset = targetSec.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    }

    function closeDrawer(scrollBackToTop) {
      isDrawerOpen = false;
      var section = document.getElementById('anatomy-studio');
      if (section) section.classList.remove('is-open');
      if (drawer) drawer.classList.remove('is-open');
      if (toggleHeader) {
        toggleHeader.setAttribute('aria-expanded', 'false');
        toggleHeader.classList.remove('is-expanded');
      }
      if (expandPill) expandPill.classList.remove('is-open');
      if (pillText) pillText.textContent = "View Room Details";
      if (bottomBtnText) bottomBtnText.textContent = "View Full Room Breakdown";

      if (scrollBackToTop) {
        var targetSec = section || document.getElementById('anatomy-studio');
        if (targetSec) {
          var offset = targetSec.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    }

    function toggleDrawer(e) {
      if (e) {
        var target = e.target;
        if (target.closest && (target.closest('.as-room-tabs') || target.closest('.as-tab-btn'))) {
          return;
        }
      }
      if (isDrawerOpen) {
        closeDrawer(false);
      } else {
        openDrawer(true);
      }
    }

    // Modal Inspection Engine
    function openModal(imgSrc, titleText) {
      if (!modal || !modalImg) return;
      modalImg.src = imgSrc;
      modalBaseW = 0;
      modalBaseH = 0;
      modalImg.onload = function() {
        computeModalBaseSize();
        resetModalZoom();
      };
      if (modalTitle) {
        var titleSpan = modalTitle.querySelector('span');
        if (titleSpan) titleSpan.textContent = titleText || "Architectural Anatomy Suite · High-Resolution Inspector";
      }
      if (modalBtnDirectImage) {
        modalBtnDirectImage.onclick = function() { if (modalZoom1to1) modalZoom1to1.click(); };
      }
      modal.classList.add('is-open', 'is-active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      computeModalBaseSize();
      resetModalZoom();
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.remove('is-open', 'is-active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      resetModalZoom();
    }

    // Bind Stage Zoom & Pan Controls
    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        stageScale = Math.min(stageScale + 0.25, 4.0);
        applyStageTransform();
      });
    }
    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        stageScale = Math.max(stageScale - 0.25, 0.6);
        applyStageTransform();
      });
    }
    if (zoomResetBtn) {
      zoomResetBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        resetStageZoom();
      });
    }

    if (stageViewport) {
      stageViewport.addEventListener('wheel', function(e) {
        e.preventDefault();
        var delta = e.deltaY > 0 ? -0.15 : 0.15;
        stageScale = Math.min(Math.max(stageScale + delta, 0.6), 4.0);
        applyStageTransform();
      }, { passive: false });

      stageViewport.addEventListener('mousedown', function(e) {
        if (e.target.closest('.as-zoom-group') || e.target.closest('.as-action-btn')) return;
        isStagePanning = true;
        stageStartX = e.clientX - stagePanX;
        stageStartY = e.clientY - stagePanY;
        stageViewport.classList.add('is-panning');
      });

      window.addEventListener('mousemove', function(e) {
        if (!isStagePanning) return;
        stagePanX = e.clientX - stageStartX;
        stagePanY = e.clientY - stageStartY;
        applyStageTransform();
      });

      window.addEventListener('mouseup', function() {
        if (isStagePanning) {
          isStagePanning = false;
          if (stageViewport) stageViewport.classList.remove('is-panning');
        }
      });
    }

    // Bind Fullscreen Modal Zoom & Pan Controls
    if (modalZoomIn) {
      modalZoomIn.addEventListener('click', function(e) {
        e.stopPropagation();
        modalScale = Math.min(modalScale + 0.35, 6.0);
        applyModalTransform();
      });
    }
    if (modalZoomOut) {
      modalZoomOut.addEventListener('click', function(e) {
        e.stopPropagation();
        modalScale = Math.max(modalScale - 0.35, 0.5);
        applyModalTransform();
      });
    }
    if (modalZoomReset) {
      modalZoomReset.addEventListener('click', function(e) {
        e.stopPropagation();
        resetModalZoom();
      });
    }
    if (modalZoom1to1) {
      modalZoom1to1.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!modalBaseW) computeModalBaseSize();
        var natW = (modalImg && modalImg.naturalWidth) ? modalImg.naturalWidth : 3840;
        if (modalBaseW > 0) {
          modalScale = Math.min(Math.max(natW / modalBaseW, 1.0), 8.0);
        } else {
          modalScale = 3.0;
        }
        modalPanX = 0;
        modalPanY = 0;
        applyModalTransform();
      });
    }

    if (modalBody) {
      modalBody.addEventListener('wheel', function(e) {
        e.preventDefault();
        var delta = e.deltaY > 0 ? -0.2 : 0.2;
        modalScale = Math.min(Math.max(modalScale + delta, 0.5), 6.0);
        applyModalTransform();
      }, { passive: false });

      modalBody.addEventListener('mousedown', function(e) {
        if (e.target.closest('.as-modal-top')) return;
        isModalPanning = true;
        modalStartX = e.clientX - modalPanX;
        modalStartY = e.clientY - modalPanY;
        modalBody.classList.add('is-panning');
      });

      window.addEventListener('mousemove', function(e) {
        if (!isModalPanning) return;
        modalPanX = e.clientX - modalStartX;
        modalPanY = e.clientY - modalStartY;
        applyModalTransform();
      });

      window.addEventListener('mouseup', function() {
        if (isModalPanning) {
          isModalPanning = false;
          if (modalBody) modalBody.classList.remove('is-panning');
        }
      });
    }

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === modalBody) {
          closeModal();
        }
      });
    }
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
        closeModal();
      }
    });

    // Inspect buttons
    if (btnInspectStage) {
      btnInspectStage.addEventListener('click', function(e) {
        e.stopPropagation();
        var r = roomData[currentRoom];
        var v = r.views[currentView];
        openModal(v.img, v.title + " · Fullscreen Monograph");
      });
    }

    if (btnInspectPlan) {
      btnInspectPlan.addEventListener('click', function(e) {
        e.stopPropagation();
        var r = roomData[currentRoom];
        openModal(r.blueprintInspect, r.title + " · Master Plan Blueprint");
      });
    }

    // Room tab clicks
    if (roomTabs) {
      roomTabs.querySelectorAll('.as-tab-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          var roomKey = this.getAttribute('data-room');
          switchRoom(roomKey);
          if (!isDrawerOpen) {
            openDrawer(false);
          }
        });
      });
    }

    // Header Toggle Card Click
    if (toggleHeader) {
      toggleHeader.addEventListener('click', toggleDrawer);
      toggleHeader.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleDrawer();
        }
      });
    }

    // Expose global API
    window.openAnatomyRoom = function(roomKey, sheetKey) {
      switchRoom(roomKey, sheetKey);
      openDrawer(true);
    };
    window.switchAnatomyRoom = switchRoom;
    window.switchAnatomyView = switchView;
    window.toggleAnatomyDrawer = toggleDrawer;
    window.openAnatomyDrawer = openDrawer;
    window.closeAnatomyDrawer = closeDrawer;

    // Backward-compatible aliases
    window.openLivingDrawer = function(scroll) { window.openAnatomyRoom('living'); };
    window.toggleLivingDrawer = function() { window.openAnatomyRoom('living'); };
    window.closeLivingDrawer = function(scroll) { closeDrawer(scroll); };

    window.openKitchenDrawer = function(scroll) { window.openAnatomyRoom('kitchen'); };
    window.toggleKitchenDrawer = function() { window.openAnatomyRoom('kitchen'); };
    window.closeKitchenDrawer = function(scroll) { closeDrawer(scroll); };

    window.openBedroomDrawer = function(scroll) { window.openAnatomyRoom('bedroom'); };
    window.toggleBedroomDrawer = function() { window.openAnatomyRoom('bedroom'); };
    window.closeBedroomDrawer = function(scroll) { closeDrawer(scroll); };

    // Bind all navigation links pointing to living, kitchen, bedroom or anatomy
    document.querySelectorAll('a[href="#living-story"], a[href="#living"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        window.openAnatomyRoom('living');
      });
    });
    document.querySelectorAll('a[href="#kitchen-story"], a[href="#kitchen"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        window.openAnatomyRoom('kitchen');
      });
    });
    document.querySelectorAll('a[href="#bedroom-story"], a[href="#bedroom"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        window.openAnatomyRoom('bedroom');
      });
    });
    document.querySelectorAll('a[href="#anatomy-studio"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        openDrawer(true);
      });
    });

    // Bind Filter Chips
    var livingChip = document.getElementById('livingFilterChip');
    if (livingChip) {
      livingChip.addEventListener('click', function() {
        window.openAnatomyRoom('living');
      });
    }
    var kitchenChip = document.getElementById('kitchenFilterChip');
    if (kitchenChip) {
      kitchenChip.addEventListener('click', function() {
        window.openAnatomyRoom('kitchen');
      });
    }
    var bedroomChip = document.getElementById('bedroomFilterChip');
    if (bedroomChip) {
      bedroomChip.addEventListener('click', function() {
        window.openAnatomyRoom('bedroom');
      });
    }

    // Initialize with Living Room (Open by default)
    switchRoom('living', 'p3');
    openDrawer(false);

  })();
