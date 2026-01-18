"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Phone, MapPin, Star, Instagram, ChevronDown } from "lucide-react";
import { useState } from "react";
import LocalBusinessSchema from "../../components/LocalBusinessSchema";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

interface ServiceItem {
	name: string;
	duration: string;
	price: string;
	description: string;
	priceOptions?: string;
}

interface ServiceCategory {
	category: string;
	items: ServiceItem[];
}

const services: ServiceCategory[] = [
	{
		category: "Hammam",
		items: [
			{
				name: "Basic Hammam",
				duration: "45 min",
				price: "AED 250",
				description:
					"Basic Hammam with steam and full body scrub + looffa AED65",
			},
			{
				name: "Traditional Hammam",
				duration: "60 min",
				price: "AED 365",
				description:
					"Experience a rejuvenating Moroccan ritual: Black soap treatment softens and nourishes your skin. Steam relaxation opens pores for deep cleansing. Full-body exfoliation with Moroccan loofa gloves leaves your skin silky smooth. Hair wash with nourishing shampoo refreshes your hair. Clay mask revitalizes your body for a radiant glow. Final rinse with aromatic shower gel leaves you feeling refreshed.",
			},
			{
				name: "Turkish Hammam",
				duration: "60 min",
				price: "AED 450",
				description:
					"Honored bathing method, employs techniques in the Hammam room's warmth for through cleansing and exfoliation. It involves an overall scrub with white soap and a kesse mitt, followed by a gentle foam massage.",
			},
			{
				name: "Royal Hammam",
				duration: "85 min",
				price: "AED 550",
				description:
					"Experience intense hydration with our Royal Hammam. Start with organic black soap and steam, followed by exfoliation with a Moroccan loofah. Enjoy a nourishing hair mask and a deeply moisturizing almond and honey scrub with argan oil. Finish with a honey and verbena body mask and a 15-minute massage. This treatment is ideal for dry skin, offering deep hydration and revitalization.",
			},
			{
				name: "Basic Kids' Hammam (3–10 years)",
				duration: "45 min",
				price: "AED 150",
				description:
					"Moroccan bath for Boys. Parents, Guardian or Nanny can be presented during the session.",
			},
		],
	},
	{
		category: "Massage",
		items: [
			{
				name: "Swedish Massage",
				duration: "Multiple",
				price: "From AED 300",
				description:
					"Relaxing treatment that helps to calm, relieve stress and promote a sense of wellbeing. It helps to unwind the mind and recover from long-standing fatigue.",
				priceOptions: "55 min - AED 300|85 min - AED 400",
			},
			{
				name: "Energizing Deep Tissue Massage",
				duration: "Multiple",
				price: "From AED 375",
				description:
					"This Energizing Massage is a deeply invigorating treatment that revitalizes the tissues. This treatment alleviates stiffness and relieves tension by encouraging the flow of energy throughout the body.",
				priceOptions: "55 min - AED 375|85 min - AED 475",
			},
			{
				name: "Hot Stone Massage - Hotstone Serenity Massage",
				duration: "Multiple",
				price: "From AED 399",
				description:
					"Indulge in pure relaxation at Hammam Al Andalus with our blissful massage treatments. Our skilled therapists create a haven of tranquility, melting away stress and tension. Whether you seek soothing Swedish, revitalizing deep tissue, or the exotic allure of aromatherapy, we'll transport you to a world of serenity. Surrender to the healing touch, and emerge refreshed, rejuvenated, and ready to conquer the world. Your journey to ultimate relaxation starts here.",
				priceOptions: "55 min - AED 399|90 min - AED 499",
			},
			{
				name: "Sport Massage",
				duration: "Multiple",
				price: "From AED 399",
				description:
					"Discover rejuvenation at Hammam Al Andalus with our therapeutic recovery treatments. Our skilled therapists are here to ease your aches, soothe your muscles, and help you recover faster. Whether you're an athlete or just need a little relief, our specialized therapies are designed for you. Get back in the game and feel your best with our therapeutic touch. Your path to recovery begins here.",
				priceOptions: "60 min - AED 399|90 min - AED 499",
			},
			{
				name: "Foot Massage",
				duration: "25 min",
				price: "AED 95",
				description:
					"Indulge in pure relaxation at Hammam Al Andalus with our blissful massage treatments. Our skilled therapists create a haven of tranquility, melting away stress and tension.",
			},
			{
				name: "Head, Neck and Shoulder Massage",
				duration: "25 min",
				price: "AED 150",
				description:
					"Targeted massage for head, neck and shoulder tension relief.",
			},
		],
	},
	{
		category: "Facial",
		items: [
			{
				name: "Express Facial",
				duration: "30 min",
				price: "AED 150",
				description:
					"Our expert aestheticians will pamper your skin, leaving you with a radiant glow.",
			},
			{
				name: "Deep Clean & Glow Lift Facial (With Skeyndor from Spain)",
				duration: "60 min",
				price: "AED 360",
				description:
					"A comprehensive treatment that offers a thorough deep clean to remove blackheads, paired with glowing hydration and lifting effects. This facial combines meticulous cleansing with revitalizing and firming techniques for a refreshed and radiant complexion.",
			},
			{
				name: "Back & Shoulders Deep Cleansing (With Skeyndor from Spain)",
				duration: "60 min",
				price: "AED 450",
				description:
					"A deep cleansing back and shoulders facial is a specialized skincare treatment targeting these neglected areas. It involves thorough cleansing, exfoliation, and gentle extractions to clear pores and address concerns like acne or dryness. A relaxing massage reduces tension, while a nourishing mask hydrates and revitalizes the skin. Benefits include unclogged pores, improved texture, acne control, and stress relief.",
			},
			{
				name: "Pro Bright Skin Treatment Deep Cleansing Facial",
				duration: "60 min",
				price: "AED 495",
				description:
					"High intensity 3-step skin treatment that boosts absorption of brightening actives into the skin addressing dark spots and reducing uneven pigmentation to reveal brighter skin.",
			},
			{
				name: "Glow Lift Face & Neck (With Skeyndor from Spain)",
				duration: "90 min",
				price: "AED 599",
				description:
					"A high-intensity facial that combines a 5-step process with lifting techniques to boost the absorption of brightening actives, address dark spots, reduce uneven pigmentation, and enhance skin firmness, with added hydration for a brighter, more radiant, and lifted complexion.",
			},
		],
	},
	{
		category: "Hair Services",
		items: [
			{
				name: "Hair Cut & Styling",
				duration: "30 min",
				price: "AED 70",
				description:
					"Expert cuts tailored to your style and personality. From classic cuts to modern trends, we'll craft the perfect look that suits your lifestyle.",
			},
			{
				name: "Junior Hair Cut & Styling (under 8yrs)",
				duration: "30 min",
				price: "AED 50",
				description:
					"Gentle, patient cuts for our youngest clients. We make haircut time fun and stress-free, delivering great styles while keeping little ones comfortable and happy.",
			},
			{
				name: "Combo - Beard + Hair Cut",
				duration: "45 min",
				price: "AED 100",
				description:
					"The complete grooming package. Get your hair and beard expertly styled in one session for a cohesive, polished look from head to chin.",
			},
			{
				name: "Eyebrow Tinting",
				duration: "10 min",
				price: "AED 40",
				description:
					"Define and enhance your brows with professional tinting. Add depth and dimension for a polished, well-groomed appearance that frames your face perfectly.",
			},
			{
				name: "Clipper Line - Add On",
				duration: "10 min",
				price: "AED 40",
				description:
					"Crisp, razor-sharp lines that elevate your cut. Precision edge-ups for your hairline, beard, or neck – the details that make all the difference.",
			},
			{
				name: "Clipper Art - Add On",
				duration: "10 min",
				price: "AED 50",
				description:
					"Make a statement with custom clipper designs. From clean geometric patterns to bold artistic details – express your style with unique hair art.",
			},
		],
	},
	{
		category: "Hair Color",
		items: [
			{
				name: "Hair Color - Short Hair",
				duration: "60 min",
				price: "AED 105",
				description:
					"Refresh your look with vibrant, professional color. Perfect coverage and stunning results for short styles – whether you're going bold or keeping it natural.",
			},
			{
				name: "Hair Color - Medium Hair",
				duration: "60 min",
				price: "AED 210",
				description:
					"Upgrade your medium-length style with expert color. Whether you're covering grays or going for a fresh new shade, we'll deliver sharp results.",
			},
			{
				name: "Hair Color - Long Hair",
				duration: "60 min",
				price: "AED 315",
				description:
					"Complete color transformation for longer styles. Even coverage from root to tip with professional-grade products for a refined, masculine finish.",
			},
			{
				name: "Hair Color - Silver, Grey Color",
				duration: "120 min",
				price: "AED 400",
				description:
					"Own the distinguished silver fox look. Our specialized grey coloring gives you that sharp, modern silver tone that commands respect and attention.",
			},
		],
	},
	{
		category: "Hair Treatment",
		items: [
			{
				name: "Hair Spa",
				duration: "60 min",
				price: "AED 100",
				description:
					"Revitalize and refresh your hair with our relaxing spa treatment. Nourish your scalp, restore moisture, and boost hair health for stronger, healthier locks.",
			},
			{
				name: "Hair Treatment",
				duration: "60 min",
				price: "AED 160",
				description:
					"Intensive care for damaged or stressed hair. Professional-grade products target your specific concerns – dryness, thinning, or scalp issues – for optimal results.",
			},
			{
				name: "Protein Treatment",
				duration: "60 min",
				price: "From AED 400",
				description:
					"Strengthen and repair damaged hair with protein-rich treatment. Rebuilds hair structure, reduces breakage, and restores strength for healthier, more resilient hair.",
			},
			{
				name: "Hair Straightening - Short Hair",
				duration: "60 min",
				price: "AED 160",
				description:
					"Smooth and straighten short hair for a sleek, manageable look. Professional straightening eliminates curls and frizz for lasting, low-maintenance style.",
			},
			{
				name: "Hair Straightening - Medium Hair",
				duration: "60 min",
				price: "AED 220",
				description:
					"Transform medium-length curly or wavy hair into smooth, straight locks. Long-lasting results that simplify your daily grooming routine.",
			},
			{
				name: "Hair Straightening - Long Hair",
				duration: "60 min",
				price: "AED 300",
				description:
					"Complete straightening service for longer hair. Achieve smooth, sleek results that eliminate frizz and curls for a polished, refined appearance.",
			},
		],
	},
	{
		category: "Beard & Moustache",
		items: [
			{
				name: "Beard",
				duration: "15 min",
				price: "AED 40",
				description:
					"We're not just about hair; we work our magic on beards and mustaches too! Our beard grooming services will leave you looking sharp and dapper, whether you prefer a classic look or something bold and adventurous.",
			},
			{
				name: "Beard Color",
				duration: "60 min",
				price: "AED 50",
				description:
					"Transform your beard with our expert coloring services – whether you're covering grays or trying something bold and adventurous!",
			},
			{
				name: "Head Shave - Machine",
				duration: "25 min",
				price: "AED 60",
				description:
					"Clean, smooth precision using professional clippers. Perfect for those who prefer a low-maintenance, sharp look with consistent results every time.",
			},
			{
				name: "Head Shave - Razor",
				duration: "25 min",
				price: "AED 50",
				description:
					"The ultimate smooth experience. A traditional hot towel razor shave that leaves your scalp impeccably smooth and refreshed – barbershop luxury at its finest.",
			},
		],
	},
	{
		category: "Hand, Feet and Nails",
		items: [
			{
				name: "Standard Manicure",
				duration: "30 min",
				price: "AED 75",
				description:
					"Professional hand and nail care. Clean, trim, shape, and buff for well-groomed hands that look sharp and polished.",
			},
			{
				name: "Standard Pedicure",
				duration: "45 min",
				price: "AED 95",
				description:
					"Complete foot and nail treatment. Soak, trim, file, and smooth for clean, comfortable feet that feel refreshed.",
			},
			{
				name: "Manicure & Pedicure Combo",
				duration: "60 min",
				price: "AED 160",
				description:
					"Full hand and foot grooming in one session. Complete nail care and grooming for a polished, well-maintained appearance.",
			},
			{
				name: "Callus Treatment",
				duration: "30 min",
				price: "AED 90",
				description:
					"Remove thick, hardened skin from feet or hands. Professional treatment softens rough areas, providing comfort and smoother skin.",
			},
			{
				name: "Foot Scrub",
				duration: "25 min",
				price: "AED 50",
				description:
					"Exfoliating treatment that removes dead skin and refreshes tired feet. Leaves your feet smooth, clean, and revitalized.",
			},
			{
				name: "Nail Cut and File",
				duration: "15 min",
				price: "AED 40",
				description:
					"Quick, essential nail maintenance. Precise trimming and shaping for neat, clean nails – the basics done right.",
			},
			{
				name: "Paraffin Hand",
				duration: "25 min",
				price: "AED 80",
				description: "Luxurious paraffin wax treatment for hands.",
			},
			{
				name: "Paraffin Feet",
				duration: "20 min",
				price: "AED 95",
				description: "Soothing paraffin wax treatment for feet.",
			},
			{
				name: "Hand Treatment",
				duration: "20 min",
				price: "AED 25",
				description: "Nourishing hand treatment.",
			},
			{
				name: "Feet Treatment",
				duration: "20 min",
				price: "AED 30",
				description: "Revitalizing feet treatment.",
			},
		],
	},
	{
		category: "Wax & Grooming - RICA Strip Wax",
		items: [
			{
				name: "Full Body (Without Intimate Area)",
				duration: "70 min",
				price: "AED 595",
				description:
					"Complete body waxing for smooth, hair-free results. Professional treatment covers chest, back, arms, and legs for total grooming confidence.",
			},
			{
				name: "Chest & Stomach",
				duration: "45 min",
				price: "AED 190",
				description:
					"Remove unwanted chest and stomach hair with professional waxing. Clean, smooth results that last longer than shaving.",
			},
			{
				name: "Full Back",
				duration: "40 min",
				price: "AED 195",
				description:
					"Complete back waxing for smooth, hair-free skin. Professional service ensures comfortable treatment and long-lasting results.",
			},
			{
				name: "Half Back",
				duration: "30 min",
				price: "AED 95",
				description:
					"Upper or lower back waxing. Targeted hair removal for a cleaner, groomed appearance where you need it.",
			},
			{
				name: "Full Arms",
				duration: "40 min",
				price: "AED 125",
				description:
					"Complete arm waxing from shoulders to wrists. Smooth, hair-free arms with results that last weeks longer than shaving.",
			},
			{
				name: "Half Arms",
				duration: "30 min",
				price: "AED 95",
				description:
					"Forearm or upper arm waxing. Quick, effective hair removal for cleaner, more defined arms.",
			},
			{
				name: "Full Legs",
				duration: "60 min",
				price: "AED 225",
				description:
					"Complete leg waxing for smooth results. Professional treatment from thighs to ankles for athletes, swimmers, or personal preference.",
			},
			{
				name: "Half Legs",
				duration: "30 min",
				price: "AED 110",
				description:
					"Lower or upper leg waxing. Targeted hair removal for a cleaner look and feel.",
			},
		],
	},
	{
		category: "Wax & Grooming - LYCON Hot Wax",
		items: [
			{
				name: "Full Body (With Intimate Area)",
				duration: "120 min",
				price: "AED 795",
				description:
					"Complete body waxing including intimate/private area. Comprehensive hair removal for total grooming – professional, discreet service performed with care.",
			},
			{
				name: "Full Body (Without Intimate Area)",
				duration: "90 min",
				price: "AED 690",
				description:
					"Complete body waxing for smooth, hair-free results. Professional treatment covers chest, back, arms, and legs for total grooming confidence.",
			},
			{
				name: "Full Face",
				duration: "30 min",
				price: "AED 95",
				description:
					"Complete facial hair removal for smooth, clean skin. Professional waxing that's quick and precise.",
			},
			{
				name: "Neck",
				duration: "15 min",
				price: "AED 50",
				description:
					"Remove unwanted neck hair for a clean, groomed appearance. Smooth results that define your look.",
			},
			{
				name: "Underarms",
				duration: "20 min",
				price: "AED 95",
				description:
					"Quick underarm waxing for hair-free, fresh results. Clean and comfortable service every time.",
			},
			{
				name: "Brazilian / Brozilian",
				duration: "30 min",
				price: "AED 215",
				description:
					"Complete intimate area grooming. Professional, discreet service for total confidence and comfort.",
			},
			{
				name: "Chest & Stomach",
				duration: "45 min",
				price: "AED 205",
				description:
					"Smooth chest and stomach waxing. Long-lasting hair removal for a clean, defined physique.",
			},
			{
				name: "Full Back",
				duration: "40 min",
				price: "AED 185",
				description:
					"Complete back waxing for smooth, hair-free skin. Professional treatment with comfortable, lasting results.",
			},
			{
				name: "Half Back",
				duration: "30 min",
				price: "AED 110",
				description:
					"Upper or lower back waxing. Targeted grooming for a cleaner, more polished appearance.",
			},
			{
				name: "Full Arms",
				duration: "40 min",
				price: "AED 145",
				description:
					"Shoulder to wrist hair removal. Smooth, defined arms with results that last weeks.",
			},
			{
				name: "Half Arms",
				duration: "25 min",
				price: "AED 95",
				description:
					"Forearm or upper arm waxing. Quick, effective grooming for cleaner-looking arms.",
			},
			{
				name: "Full Legs",
				duration: "60 min",
				price: "AED 240",
				description:
					"Complete leg waxing from thigh to ankle. Smooth results ideal for athletes or personal preference.",
			},
			{
				name: "Half Legs",
				duration: "30 min",
				price: "AED 145",
				description:
					"Lower or upper leg hair removal. Targeted waxing for a cleaner, more groomed look.",
			},
			{
				name: "Nose",
				duration: "5 min",
				price: "AED 25",
				description:
					"Remove unwanted nose hair safely and effectively. Quick, hygienic grooming for a polished appearance.",
			},
			{
				name: "Ears",
				duration: "5 min",
				price: "AED 25",
				description:
					"Professional ear hair removal. Clean, precise service for well-groomed, detailed finishing touches.",
			},
			{
				name: "Eyebrows",
				duration: "15 min",
				price: "AED 40",
				description:
					"Shape and groom eyebrows for a sharp, defined look. Professional waxing that enhances your features.",
			},
		],
	},
	{
		category: "Body Shaving / Machine Trim",
		items: [
			{
				name: "Full Body Shaving (Without Bikini)",
				duration: "70 min",
				price: "AED 290",
				description: "Complete body shaving service excluding intimate areas.",
			},
			{
				name: "Full Body Shaving (With Bikini)",
				duration: "60 min",
				price: "AED 340",
				description: "Complete body shaving service including intimate areas.",
			},
			{
				name: "Chest & Stomach Trim",
				duration: "40 min",
				price: "AED 120",
				description: "Professional trimming for chest and stomach area.",
			},
			{
				name: "Full Back Trim",
				duration: "40 min",
				price: "AED 120",
				description: "Complete back trimming service.",
			},
			{
				name: "Half Back Trim",
				duration: "25 min",
				price: "AED 95",
				description: "Upper or lower back trimming.",
			},
			{
				name: "Full Arms Trim",
				duration: "35 min",
				price: "AED 85",
				description: "Complete arm trimming service.",
			},
			{
				name: "Half Arms Trim",
				duration: "20 min",
				price: "AED 50",
				description: "Forearm or upper arm trimming.",
			},
			{
				name: "Full Legs Trim",
				duration: "45 min",
				price: "AED 160",
				description: "Complete leg trimming service.",
			},
			{
				name: "Half Legs Trim",
				duration: "25 min",
				price: "AED 75",
				description: "Lower or upper leg trimming.",
			},
			{
				name: "Underarm Trim",
				duration: "20 min",
				price: "AED 55",
				description: "Underarm area trimming.",
			},
			{
				name: "Brazilian Trim",
				duration: "30 min",
				price: "AED 190",
				description: "Intimate area trimming service.",
			},
		],
	},
	{
		category: "Threading",
		items: [
			{
				name: "Full Face Threading",
				duration: "20 min",
				price: "AED 60",
				description:
					"Complete facial hair removal using traditional threading technique.",
			},
			{
				name: "Eyebrows Threading",
				duration: "15 min",
				price: "AED 30",
				description: "Precise eyebrow shaping using threading.",
			},
			{
				name: "Side Burn Threading",
				duration: "15 min",
				price: "AED 30",
				description: "Clean sideburn shaping with threading.",
			},
		],
	},
	{
		category: "Packages",
		items: [
			{
				name: "Express Combo: Basic Hammam + Massage",
				duration: "105 min",
				price: "AED 399",
				description:
					"Quick rejuvenation package combining basic hammam with relaxing massage.",
			},
			{
				name: "Traditional Combo: Traditional Hammam & Deep Tissue Massage",
				duration: "120 min",
				price: "AED 599",
				description:
					"Complete wellness experience with traditional hammam and therapeutic deep tissue massage.",
			},
			{
				name: "Spa Day Package: Basic Hammam, Massage, Express Facial, Manicure & Pedicure",
				duration: "165 min",
				price: "AED 650",
				description:
					"Ultimate spa day experience including hammam, massage, facial, and nail services.",
			},
		],
	},
	{
		category: "Memberships",
		items: [
			{
				name: "Royal Hammam - 5 Sessions",
				duration: "Package",
				price: "AED 2,340",
				description: "Package of 5 Royal Hammam sessions.",
			},
			{
				name: "Traditional Moroccan Bath - 7 Sessions",
				duration: "Package",
				price: "AED 1,750",
				description: "Package of 7 Traditional Moroccan Bath sessions.",
			},
			{
				name: "Basic Hammam - 5 Sessions",
				duration: "Package",
				price: "AED 895",
				description: "Package of 5 Basic Hammam sessions.",
			},
			{
				name: "Basic Hammam - 10 Sessions",
				duration: "Package",
				price: "AED 1,575",
				description: "Package of 10 Basic Hammam sessions.",
			},
			{
				name: "Swedish Massage - 5 Sessions",
				duration: "Package",
				price: "AED 1,050",
				description: "Package of 5 Swedish Massage sessions.",
			},
			{
				name: "Swedish Massage - 10 Sessions",
				duration: "Package",
				price: "AED 1,890",
				description: "Package of 10 Swedish Massage sessions.",
			},
			{
				name: "Deep Clean & Glow Lift - 5 Sessions",
				duration: "Package",
				price: "AED 1,350",
				description: "Package of 5 Deep Clean & Glow Lift Facial sessions.",
			},
			{
				name: "Deep Clean & Glow Lift - 10 Sessions",
				duration: "Package",
				price: "AED 1,890",
				description: "Package of 10 Deep Clean & Glow Lift Facial sessions.",
			},
			{
				name: "Hair Cut - 5+1 Sessions",
				duration: "Package",
				price: "AED 350",
				description: "Package of 5 Hair Cuts + 1 Free.",
			},
			{
				name: "Beard - 5+1 Sessions",
				duration: "Package",
				price: "AED 200",
				description: "Package of 5 Beard Trims + 1 Free.",
			},
		],
	},
];

const reviews = [
	{
		name: "Ahmed M.",
		rating: 5,
		text:
			"Best traditional hammam experience in Dubai! The authentic Moroccan ritual was exactly what I needed. The steam room was perfect, and the scrubbing technique was professional. Highly recommend for any man looking for a genuine hammam experience.",
		treatment: "Traditional Hammam",
	},
	{
		name: "Omar K.",
		rating: 5,
		text:
			"Excellent barber services combined with a relaxing hammam. The staff is professional and the atmosphere is perfect for men. I've been coming here regularly and always leave feeling refreshed and well-groomed.",
		treatment: "Hammam & Barber Combo",
	},
	{
		name: "Khalid A.",
		rating: 5,
		text:
			"Authentic Moroccan hammam at its finest. The treatment room is spacious and the service is top-notch. This is the real deal - not a fancy hotel version, but the genuine traditional experience. Will definitely return!",
		treatment: "Turkish Hammam",
	},
];

export default function AlAndalusPage() {
	const [activeCategory, setActiveCategory] = useState("Hammam");
	const [openBookingFor, setOpenBookingFor] = useState<string | null>(null);

	const activeServices = services.find(
		(service) => service.category === activeCategory
	);

	// Build display categories with a single merged "Wax & Grooming" tab
	const displayCategories = (() => {
		const categories: string[] = [];
		let addedWaxing = false;
		for (const s of services) {
			if (s.category.startsWith("Wax & Grooming")) {
				if (!addedWaxing) {
					categories.push("Wax & Grooming");
					addedWaxing = true;
				}
				continue;
			}
			categories.push(s.category);
		}
		return categories;
	})();

	const waxingRica = services.find((s) => s.category === "Wax & Grooming - RICA Strip Wax");
	const waxingLycon = services.find((s) => s.category === "Wax & Grooming - LYCON Hot Wax");

	return (
		<>
			<LocalBusinessSchema
				name="Al Andalus Hammam & Barber"
				description="Authentic Moroccan hammam experiences and professional barber services for men in Al Barsha, Dubai. Traditional wellness rituals, grooming services, and relaxation treatments."
				url="https://sultanaspa.com/spa/al-andalus"
				telephone="+97143939692"
				address={{
					addressLocality: "Al Barsha",
					addressRegion: "Dubai",
					addressCountry: "AE"
				}}
				priceRange="$$"
			/>
			<BreadcrumbSchema
				items={[
					{ name: "Home", url: "https://sultanaspa.com" },
					{ name: "Al Andalus", url: "https://sultanaspa.com/spa/al-andalus" }
				]}
			/>
			<div className="min-h-screen bg-white">
			{/* Header */}
			<div
				className="py-6 px-4"
				style={{ background: "linear-gradient(to right, #F8F4EF, #C4A484)" }}
			>
				<div className="max-w-6xl mx-auto">
					<Link
						href="/"
						className="inline-flex items-center hover:opacity-80 mb-3 transition-colors"
						style={{ color: "#5D4037" }}
					>
						<ArrowLeft className="h-4 w-4 mr-2" />
						Back to Locations
					</Link>
					<h1
						className="text-3xl md:text-5xl font-light mb-3"
						style={{ color: "#5D4037" }}
					>
						Al Andalus Hammam & Barber
					</h1>
					<p
						className="text-lg md:text-xl max-w-3xl"
						style={{ color: "#A78A7F" }}
					>
						Luxury wellness sanctuary in the heart of Al Andalus
					</p>
				</div>
			</div>

			{/* Services Section with Menu */}
			<div className="py-8 md:py-12 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-8">
						<h2
							className="text-3xl md:text-4xl font-light mb-4"
							style={{ color: "#5D4037" }}
						>
							Our Services
						</h2>
						<p className="text-lg" style={{ color: "#A78A7F" }}>
							Choose your category to view our premium treatments
						</p>
					</div>

					{/* Service Category Menu */}
					<div className="mb-8">
					<div className="flex flex-wrap justify-center gap-2 md:gap-4">
						{displayCategories.map((category) => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-200 text-sm md:text-base ${
										activeCategory === category
											? "text-white shadow-lg"
											: "bg-white border hover:bg-opacity-80"
									}`}
									style={{
										backgroundColor:
											activeCategory === category ? "#5D4037" : "white",
										color: activeCategory === category ? "white" : "#A78A7F",
										borderColor: "#C4A484",
									}}
								>
									{category}
								</button>
							))}
						</div>
					</div>

					{/* Active Category Services */}
					{activeCategory !== "Wax & Grooming" && activeServices && (
						<div
							className="bg-white rounded-2xl shadow-lg overflow-hidden"
							style={{ border: "1px solid #C4A484" }}
						>
							<div
								className="p-6"
								style={{
									background: "linear-gradient(to right, #C4A484, #A78A7F)",
								}}
							>
								<h3 className="text-2xl font-medium text-white">
									{activeServices.category}
								</h3>
							</div>
							<div className="p-6">
								<div className="grid gap-6">
									{activeServices.items.map((service: ServiceItem) => (
										<div
											key={service.name}
											className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-xl hover:bg-opacity-50 transition-colors"
											style={{
												border: "1px solid #F8F4EF",
												backgroundColor: "rgba(248, 244, 239, 0.3)",
											}}
										>
											<div className="flex-1">
												<h4
													className="text-lg font-medium mb-1"
													style={{ color: "#5D4037" }}
												>
													{service.name}
												</h4>
												<p className="mb-2 text-sm" style={{ color: "#A78A7F" }}>
													{service.description}
												</p>
												{service.name !== "Add-on Loofa" && !service.priceOptions && (
													<p className="flex items-center text-sm" style={{ color: "#A78A7F" }}>
														<Clock className="h-4 w-4 mr-1" />
														{service.duration}
													</p>
												)}
											</div>
											<div className="mt-4 md:mt-0 md:ml-6 flex flex-col md:items-end">
												<p className="text-2xl font-bold mb-2" style={{ color: "#5D4037" }}>
													{service.price}
												</p>
												{service.priceOptions && (
													<p className="text-xs md:text-sm mb-3 text-right" style={{ color: "#A78A7F" }}>
														{service.priceOptions.split("|").map((option, index, array) => (
															<span key={index}>
																{option}
																{index < array.length - 1 && (
																	<span className="font-bold"> | </span>
																)}
															</span>
														))}
													</p>
												)}
											{service.name !== "Add-on Loofa" && (
												<div className="relative">
													<button
														className="inline-flex items-center gap-2 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm hover:opacity-90"
														style={{ backgroundColor: "#5D4037" }}
														aria-expanded={openBookingFor === service.name}
														onClick={() => setOpenBookingFor(openBookingFor === service.name ? null : service.name)}
													>
														<span>Book Now</span>
														<ChevronDown
															className={`h-4 w-4 transition-transform ${openBookingFor === service.name ? "rotate-180" : ""}`}
														/>
													</button>
													{openBookingFor === service.name && (
														<div
															className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-lg shadow-lg border z-10 p-3"
															style={{ borderColor: "#C4A484" }}
														>
															<div className="flex flex-col gap-2">
																<a
																	href="tel:+97143939692"
																	className="text-white font-medium py-2 px-3 rounded-full text-xs text-center hover:opacity-90"
																	style={{ backgroundColor: "#5D4037" }}
																>
																	Call
																</a>
																<a
																	href="https://wa.me/971524455769"
																	target="_blank"
																	rel="noopener noreferrer"
																	className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-full text-xs text-center"
																>
																	WhatsApp
																</a>
															</div>
														</div>
													)}
												</div>
											)}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					)}

					{activeCategory === "Wax & Grooming" && (
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{ border: "1px solid #C4A484" }}>
							<div className="p-6" style={{ background: "linear-gradient(to right, #C4A484, #A78A7F)" }}>
								<h3 className="text-2xl font-medium text-white">Wax & Grooming</h3>
							</div>
							<div className="p-6">
								{/* RICA Section */}
								{waxingRica && (
									<div className="mb-8">
										<h4 className="text-xl font-medium mb-4" style={{ color: "#5D4037" }}>RICA Strip Wax</h4>
										<div className="grid gap-6">
											{waxingRica.items.map((service: ServiceItem) => (
												<div key={`RICA-${service.name}`} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-xl hover:bg-opacity-50 transition-colors" style={{ border: "1px solid #F8F4EF", backgroundColor: "rgba(248, 244, 239, 0.3)" }}>
													<div className="flex-1">
														<h4 className="text-lg font-medium mb-1" style={{ color: "#5D4037" }}>{service.name}</h4>
														<p className="mb-2 text-sm" style={{ color: "#A78A7F" }}>{service.description}</p>
														{!service.priceOptions && (
															<p className="flex items-center text-sm" style={{ color: "#A78A7F" }}>
															<Clock className="h-4 w-4 mr-1" />
															{service.duration}
															</p>
														)}
													</div>
											<div className="mt-4 md:mt-0 md:ml-6 flex flex-col md:items-end">
												<p className="text-2xl font-bold mb-2" style={{ color: "#5D4037" }}>{service.price}</p>
												{service.priceOptions && (
													<p className="text-xs md:text-sm mb-3 text-right" style={{ color: "#A78A7F" }}>
														{service.priceOptions.split("|").map((option, index, array) => (
															<span key={index}>
																{option}
																{index < array.length - 1 && (
																	<span className="font-bold"> | </span>
																)}
															</span>
														))}
													</p>
												)}
												{(() => {
													const bookingKey = `RICA-${service.name}`;
													return (
														<div className="relative">
															<button
																className="inline-flex items-center gap-2 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm hover:opacity-90"
																style={{ backgroundColor: "#5D4037" }}
																aria-expanded={openBookingFor === bookingKey}
																onClick={() => setOpenBookingFor(openBookingFor === bookingKey ? null : bookingKey)}
															>
																<span>Book Now</span>
																<ChevronDown
																	className={`h-4 w-4 transition-transform ${openBookingFor === bookingKey ? "rotate-180" : ""}`}
																/>
															</button>
															{openBookingFor === bookingKey && (
																<div
																	className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-lg shadow-lg border z-10 p-3"
																	style={{ borderColor: "#C4A484" }}
																>
																	<div className="flex flex-col gap-2">
																		<a
																			href="tel:+97143939692"
																			className="text-white font-medium py-2 px-3 rounded-full text-xs text-center hover:opacity-90"
																			style={{ backgroundColor: "#5D4037" }}
																		>
																			Call
																		</a>
																		<a
																			href="https://wa.me/971524455769"
																			target="_blank"
																			rel="noopener noreferrer"
																			className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-full text-xs text-center"
																		>
																			WhatsApp
																		</a>
																	</div>
																</div>
															)}
														</div>
													);
												})()}
											</div>
												</div>
											))}
										</div>
									</div>
								)}

								{/* Divider */}
								<div className="my-6 border-t" style={{ borderColor: "#F8F4EF" }} />

								{/* LYCON Section */}
								{waxingLycon && (
									<div>
										<h4 className="text-xl font-medium mb-4" style={{ color: "#5D4037" }}>LYCON Hot Wax</h4>
										<div className="grid gap-6">
											{waxingLycon.items.map((service: ServiceItem) => (
												<div key={`LYCON-${service.name}`} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-xl hover:bg-opacity-50 transition-colors" style={{ border: "1px solid #F8F4EF", backgroundColor: "rgba(248, 244, 239, 0.3)" }}>
													<div className="flex-1">
														<h4 className="text-lg font-medium mb-1" style={{ color: "#5D4037" }}>{service.name}</h4>
														<p className="mb-2 text-sm" style={{ color: "#A78A7F" }}>{service.description}</p>
														{!service.priceOptions && (
															<p className="flex items-center text-sm" style={{ color: "#A78A7F" }}>
															<Clock className="h-4 w-4 mr-1" />
															{service.duration}
															</p>
														)}
													</div>
											<div className="mt-4 md:mt-0 md:ml-6 flex flex-col md:items-end">
												<p className="text-2xl font-bold mb-2" style={{ color: "#5D4037" }}>{service.price}</p>
												{service.priceOptions && (
													<p className="text-xs md:text-sm mb-3 text-right" style={{ color: "#A78A7F" }}>
														{service.priceOptions.split("|").map((option, index, array) => (
															<span key={index}>
																{option}
																{index < array.length - 1 && (
																	<span className="font-bold"> | </span>
																)}
															</span>
														))}
													</p>
												)}
												{(() => {
													const bookingKey = `LYCON-${service.name}`;
													return (
														<div className="relative">
															<button
																className="inline-flex items-center gap-2 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm hover:opacity-90"
																style={{ backgroundColor: "#5D4037" }}
																aria-expanded={openBookingFor === bookingKey}
																onClick={() => setOpenBookingFor(openBookingFor === bookingKey ? null : bookingKey)}
															>
																<span>Book Now</span>
																<ChevronDown
																	className={`h-4 w-4 transition-transform ${openBookingFor === bookingKey ? "rotate-180" : ""}`}
																/>
															</button>
															{openBookingFor === bookingKey && (
																<div
																	className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-lg shadow-lg border z-10 p-3"
																	style={{ borderColor: "#C4A484" }}
																>
																	<div className="flex flex-col gap-2">
																		<a
																			href="tel:+97143939692"
																			className="text-white font-medium py-2 px-3 rounded-full text-xs text-center hover:opacity-90"
																			style={{ backgroundColor: "#5D4037" }}
																		>
																			Call
																		</a>
																		<a
																			href="https://wa.me/971524455769"
																			target="_blank"
																			rel="noopener noreferrer"
																			className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-full text-xs text-center"
																		>
																			WhatsApp
																		</a>
																	</div>
																</div>
															)}
														</div>
													);
												})()}
											</div>
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Location Info - Moved Below Services */}
			<div className="py-4 md:py-6 px-4" style={{ backgroundColor: "#F8F4EF" }}>
				<div className="max-w-6xl mx-auto">
					{/* Desktop Layout - Compact */}
					<div className="hidden md:grid md:grid-cols-3 gap-4">
						<div className="bg-white rounded-lg p-4 shadow" style={{ border: "1px solid #C4A484" }}>
							<h3 className="text-lg font-medium mb-2 flex items-center" style={{ color: "#5D4037" }}>
								<MapPin className="h-4 w-4 mr-1" style={{ color: "#C4A484" }} />
								Location
							</h3>
							<div className="space-y-1 text-sm">
								<a
									href="https://www.google.com/maps/place/Al+Andalus+Barber+%26+Hammam+Spa/@25.1113661,55.1895418,476m/data=!3m1!1e3!4m6!3m5!1s0x3e5f6b8b573cd6a1:0x2f7c44be74afaca4!8m2!3d25.111796!4d55.1902288!16s%2Fg%2F11l29z_8vj?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-xs text-center hover:opacity-90"
									style={{ backgroundColor: "#5D4037" }}
								>
									Open Google Maps
								</a>
							</div>
						</div>

						<div className="bg-white rounded-lg p-4 shadow" style={{ border: "1px solid #C4A484" }}>
							<h3 className="text-lg font-medium mb-2 flex items-center" style={{ color: "#5D4037" }}>
								<Phone className="h-4 w-4 mr-1" style={{ color: "#C4A484" }} />
								Contact & Booking
							</h3>
							<div className="space-y-2 text-sm">
								<div className="flex gap-2">
									<a
										href="tel:+97143939692"
										className="flex-1 text-white font-medium py-2 px-3 rounded-full transition-colors duration-200 text-xs text-center hover:opacity-90"
										style={{ backgroundColor: "#5D4037" }}
									>
										Call
									</a>
									<a
										href="https://wa.me/971524455769"
										className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-full transition-colors duration-200 text-xs text-center"
									>
										WhatsApp
									</a>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-lg p-4 shadow" style={{ border: "1px solid #C4A484" }}>
							<h3 className="text-lg font-medium mb-2 flex items-center" style={{ color: "#5D4037" }}>
								<Instagram className="h-4 w-4 mr-1" style={{ color: "#C4A484" }} />
								Follow Us
							</h3>
							<div className="space-y-1 text-sm" style={{ color: "#A78A7F" }}>
								<a
									href="https://www.instagram.com/sultanaspahammamdubai/"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-xs text-center hover:opacity-90"
									style={{
										background:
											"linear-gradient(to right, #C4A484, #A78A7F)",
									}}
								>
									@sultanaspahammamdubai
								</a>
							</div>
						</div>
					</div>

					{/* Mobile Layout - Always Expanded */}
					<div className="md:hidden space-y-4">
						<h3
							className="text-2xl font-light mb-4 text-center"
							style={{ color: "#5D4037" }}
						>
							Contact Us
						</h3>

						{/* Location Section */}
						<div className="bg-white rounded-lg shadow" style={{ border: "1px solid #C4A484" }}>
							<div className="p-4">
								<div className="flex items-center mb-3">
									<MapPin className="h-4 w-4 mr-2" style={{ color: "#C4A484" }} />
									<span className="font-medium" style={{ color: "#5D4037" }}>
										Location
									</span>
								</div>
								<a
									href="https://www.google.com/maps/place/Al+Andalus+Barber+%26+Hammam+Spa/@25.1113661,55.1895418,476m/data=!3m1!1e3!4m6!3m5!1s0x3e5f6b8b573cd6a1:0x2f7c44be74afaca4!8m2!3d25.111796!4d55.1902288!16s%2Fg%2F11l29z_8vj?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center hover:opacity-90 text-sm"
									style={{ backgroundColor: "#5D4037" }}
								>
									Open Google Maps
								</a>
							</div>
						</div>

						{/* Contact Section */}
						<div className="bg-white rounded-lg shadow" style={{ border: "1px solid #C4A484" }}>
							<div className="p-4">
								<div className="flex items-center mb-3">
									<Phone className="h-4 w-4 mr-2" style={{ color: "#C4A484" }} />
									<span className="font-medium" style={{ color: "#5D4037" }}>
										Contact & Booking
									</span>
								</div>
								<div className="flex gap-2">
									<a
										href="tel:+97143939692"
										className="flex-1 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center hover:opacity-90 text-sm"
										style={{ backgroundColor: "#5D4037" }}
									>
										Call
									</a>
									<a
										href="https://wa.me/971524455769"
										className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center text-sm"
									>
										WhatsApp
									</a>
								</div>
							</div>
						</div>

						{/* Follow Us Section */}
						<div className="bg-white rounded-lg shadow" style={{ border: "1px solid #C4A484" }}>
							<div className="p-4">
								<div className="flex items-center mb-3">
									<Instagram className="h-4 w-4 mr-2" style={{ color: "#C4A484" }} />
									<span className="font-medium" style={{ color: "#5D4037" }}>
										Follow Us
									</span>
								</div>
								<a
									href="https://www.instagram.com/sultanaspahammamdubai/"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center hover:opacity-90 text-sm"
									style={{
										background:
											"linear-gradient(to right, #C4A484, #A78A7F)",
									}}
								>
									@sultanaspahammamdubai
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Reviews Section */}
			<div className="py-16 px-4" style={{ backgroundColor: "#F8F4EF" }}>
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h3 className="text-4xl font-light mb-4" style={{ color: "#5D4037" }}>
							What Our Clients Say
						</h3>
						<p className="text-lg" style={{ color: "#A78A7F" }}>
							Real experiences from our valued guests
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{reviews.map((review) => (
							<div
								key={review.name}
								className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
								style={{ border: "1px solid #C4A484" }}
							>
								<div className="flex justify-center mb-4">
									{[...Array(review.rating)].map((_, i) => (
										<Star key={i} className="h-5 w-5 fill-current" style={{ color: "#C4A484" }} />
									))}
								</div>
								<p className="italic mb-4 leading-relaxed" style={{ color: "#A78A7F" }}>
									&ldquo;{review.text}&rdquo;
								</p>
								<div className="text-center">
									<p className="font-medium" style={{ color: "#5D4037" }}>
										{review.name}
									</p>
									<p className="text-sm" style={{ color: "#A78A7F" }}>
										{review.treatment}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<div
				className="py-16 px-4"
				style={{ background: "linear-gradient(to right, #C4A484, #A78A7F)" }}
			>
				<div className="max-w-4xl mx-auto text-center text-white">
					<h3 className="text-4xl font-light mb-6">
						Ready to Experience Luxury?
					</h3>
					<p className="text-xl mb-8 opacity-90">
						Call us today and discover why we're Dubai's premier spa destination
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="tel:+97143939692"
							className="border-2 border-white text-white hover:bg-white font-medium py-4 px-8 rounded-full transition-colors duration-200 text-lg inline-block text-center"
							style={{ borderColor: "white" }}
							onMouseEnter={(e) => {
								(e.target as HTMLAnchorElement).style.backgroundColor = "white";
								(e.target as HTMLAnchorElement).style.color = "#5D4037";
							}}
							onMouseLeave={(e) => {
								(e.target as HTMLAnchorElement).style.backgroundColor = "transparent";
								(e.target as HTMLAnchorElement).style.color = "white";
							}}
						>
							Call Us Now
						</a>
					</div>
				</div>
			</div>
			</div>
		</>
	);
}


