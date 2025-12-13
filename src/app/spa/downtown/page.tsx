"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Phone, MapPin, Star, Instagram, ChevronDown } from "lucide-react";
import { useState } from "react";

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
			{ name: "60 Minute Traditional Hammam", duration: "1h", price: "AED 350", description: "Experience a rejuvenating Moroccan ritual. Black soap treatment softens and nourishes your skin. Steam relaxation opens pores for deep cleansing. Full-body exfoliation with Moroccan lufa gloves leaves your skin silky smooth. Hair wash with nourishing shampoo refreshes your hair. Clay mask revitalizes your body for a radiant glow. Final rinse with aromatic shower gel leaves you feeling refreshed." },
			{ name: "60 Minute Turkish Hammam", duration: "1h", price: "AED 450", description: "Honored bathing method employing techniques in the Hammam room's warmth for thorough cleansing and exfoliation. Involves an overall scrub with white soap and a kesse mitt, followed by a gentle foam massage." },
			{ name: "Detox Hammam", duration: "1h 15m", price: "AED 550", description: "A deeply purifying ritual focusing on whitening, featuring a nourishing argan hair treatment, double exfoliation with a kessa glove and detoxifying green tea scrub, followed by a body and face mask. Finish with a green tea antioxidant massage and a refreshing shower gel cleanse." },
			{ name: "Royal Hammam", duration: "1h 30m", price: "AED 650", description: "Experience intense hydration with our Royal Hammam. Start with organic black soap and steam, followed by exfoliation with a Moroccan loofah. Enjoy a nourishing hair mask and a deeply moisturizing almond and honey scrub with argan oil. Finish with a honey and verbena body mask and a 15-minute massage. This treatment is ideal for dry skin, offering deep hydration and revitalization." },
			{ name: "Sultana Signature Hammam", duration: "1h 30m", price: "AED 780", description: "Indulge in luxury with our Sultana Signature treatment. Start with a refreshing Jardin Roses mist. Enjoy a revitalizing exfoliation with Baldi black soap, followed by a soothing steam session. Dead skin is gently removed with a loofah. Pamper yourself with a detoxifying Miel D'Ambre body balm massage. Refresh your hair with Multiplying Scalp Shampoo and a hydrating Scalp Mask. Unwind with a 20-minute full-body stretch using soothing orange blossom shower milk. Finish with a nourishing body balm for glowing skin." },
		]
	},
	{
		category: "Massage",
		items: [
			{ name: "Energizing Deep Tissue Massage by Alteara Bio", duration: "1h", price: "AED 400", description: "Acupressure and deep techniques. This energizing massage is a deeply invigorating treatment that revitalizes the body, alleviates stiffness, and releases tension by stimulating energy flow through the muscles." },
			{ name: "Energizing Deep Tissue Massage by Alteara Bio", duration: "1h 30m", price: "AED 495", description: "Acupressure and deep techniques. This energizing massage is a deeply invigorating treatment that revitalizes the body, alleviates stiffness, and releases tension by stimulating energy flow through the muscles." },
			{ name: "White - Pure Massage Lymphatic Drainage by Alteara Bio", duration: "1h", price: "AED 395", description: "Lymphatic drainage movements. A purifying massage that uses slow, rhythmic movements to promote lymph circulation, remove toxins, and restore a deep feeling of lightness and clarity." },
			{ name: "White - Pure Massage Lymphatic Drainage by Alteara Bio", duration: "1h 30m", price: "AED 495", description: "Lymphatic drainage movements. A purifying massage that uses slow, rhythmic movements to promote lymph circulation, remove toxins, and restore a deep feeling of lightness and clarity." },
			{ name: "Sensory Awakening Candle Massage by MarocMaroc", duration: "1h 15m", price: "AED 650", description: "Relax, balance, and soothe. Inspired by ancient Moroccan secrets, this warm candle massage melts into oil to nourish, soothe, and rejuvenate the body with amber, vanilla, and musk." },
			{ name: "Serenity Massage Relaxation by Alteara Bio", duration: "30m", price: "AED 250", description: "Soothing light strokes. A gentle relaxation massage designed to calm the body and mind, reduce stress, and promote emotional balance and inner peace." },
			{ name: "Serenity Massage Relaxation by Alteara Bio", duration: "1h", price: "AED 395", description: "Soothing light strokes. A gentle relaxation massage designed to calm the body and mind, reduce stress, and promote emotional balance and inner peace." },
			{ name: "Serenity Massage Relaxation by Alteara Bio", duration: "1h 30m", price: "AED 495", description: "Soothing light strokes. A gentle relaxation massage designed to calm the body and mind, reduce stress, and promote emotional balance and inner peace." },
			{ name: "Hotstone Serenity Massage", duration: "1h", price: "AED 450", description: "Warm stone therapy. The combination of warm volcanic stones and soft strokes melts away stress and muscle tension, promoting inner tranquility and physical harmony." },
			{ name: "Hotstone Serenity Massage", duration: "1h 30m", price: "AED 595", description: "Warm stone therapy. The combination of warm volcanic stones and soft strokes melts away stress and muscle tension, promoting inner tranquility and physical harmony." },
			{ name: "Emerald - Oxygenating Thai Massage by Alteara Bio", duration: "1h", price: "AED 395", description: "Includes stretching. A revitalizing fusion of Thai-inspired stretches and Alteara oils that promotes circulation, flexibility, and oxygen flow to refresh body and mind." },
			{ name: "Emerald - Oxygenating Thai Massage by Alteara Bio", duration: "1h 30m", price: "AED 495", description: "Includes stretching. A revitalizing fusion of Thai-inspired stretches and Alteara oils that promotes circulation, flexibility, and oxygen flow to refresh body and mind." },
			{ name: "Blissful Bloom Pregnancy Massage with Argan", duration: "1h", price: "AED 400", description: "Prenatal comfort and relaxation. A gentle, supportive massage tailored for mothers-to-be using nourishing Argan oil to relieve tension, reduce swelling, and promote total relaxation." },
			{ name: "Access Bars", duration: "1h", price: "AED 600", description: "The access bars is 32 points on the head which when activated can help facilitate reduction in stress and trauma throughout the body and increase positive attitudes toward life. When lightly touched, the bars points stimulate a positive neurological response inside the recipient. This appears to trigger the body's natural ability to heal and facilitate the physiological changes required for greater wellbeing. The session normally lasts 60 to 90 minutes and feels like a gentle head massage." },
			{ name: "In-Chair Foot Massage", duration: "20m", price: "AED 95", description: "A relaxing foot massage performed while seated, focusing on pressure points to relieve fatigue and improve circulation. This treatment soothes tired feet, restores comfort, and leaves you feeling refreshed and re-energized." },
			{ name: "In-Chair Face Massage", duration: "20m", price: "AED 180", description: "A quick and refreshing facial massage performed while seated. This treatment helps improve circulation, relieve facial tension, and enhance your natural glow — perfect for a short relaxation break or before any treatment." },
			{ name: "Head and Neck Massage", duration: "30m", price: "AED 250", description: "Gentle manipulation of the head, neck, and shoulders. The benefits of head massages are numerous. Not only can they help reduce stress and tension, but they can also help relieve pain, improve circulation, and even help with headaches and migraines." },
			{ name: "Face Massage", duration: "30m", price: "AED 250", description: "A rejuvenating seated facial massage designed to lift, tone, and firm the skin. Gentle yet effective techniques help improve circulation, define facial contours, and promote a youthful, radiant appearance — ideal for a quick beauty boost." },
		]
	},
	{
		category: "Hydrafacial",
		items: [
			{ name: "Signature Hydrofacial", duration: "30m", price: "AED 550", description: "Indulge in a rejuvenating 30-minute escape that leaves your skin feeling refreshed and radiant. This express treatment begins with a deep cleanse and gentle exfoliation to remove impurities, followed by advanced hydration to quench your skin. Perfect for busy schedules, this luxurious facial delivers a luminous glow and an instant boost of vitality in no time." },
			{ name: "Deluxe Hydrofacial", duration: "45m", price: "AED 800", description: "Elevate your skincare journey with our Deluxe Hydrofacial, designed to pamper and transform your skin. This treatment combines deep cleansing and invigorating hydration, enriched by potent skin boosters tailored to your needs. Relax as your skin is infused with nourishing serums that smooth, brighten, and rejuvenate, leaving you with a healthy, radiant complexion." },
			{ name: "Platinum Hydrofacial", duration: "1h", price: "AED 1000", description: "This luxurious treatment begins with a cleanse and exfoliation to reveal smoother, brighter skin. Customized boosters target your specific needs, followed by a relaxing facial massage. Finished with nourishing serums, your skin feels hydrated, glowing, and rejuvenated. The perfect refresh for a radiant complexion." },
		]
	},
	{
		category: "Facial",
		items: [
			{ name: "Signature Cactéa Facial", duration: "1h 15m", price: "AED 700", description: "Full face ritual designed with the highest ingredients with lymphatic drainage and lifting massage to leave your skin toned, firm and to boost radiance. Ritual is complemented with ancient Moroccan techniques of neck stretching, hand and foot massage releasing tension whilst promoting radiant skin." },
			{ name: "Glow Lift Face & Neck", duration: "1h 20m", price: "AED 595", description: "A high-intensity facial that combines a 5-step process with lifting techniques to boost the absorption of brightening actives, address dark spots, reduce uneven pigmentation, and enhance skin firmness, with added hydration for a brighter, more radiant, and lifted complexion." },
			{ name: "Deep Clean & Glow Lift Facial", duration: "1h", price: "AED 395", description: "A comprehensive treatment that offers a thorough deep clean to remove blackheads, paired with glowing hydration and lifting effects. This facial combines meticulous cleansing with revitalizing and firming techniques for a refreshed and radiant complexion." },
			{ name: "Express Facial", duration: "30m", price: "AED 250", description: "A 30-minute treatment designed to cleanse, exfoliate, and hydrate your skin, leaving it refreshed, smooth, and glowing. Perfect for a quick glow on the go!" },
		]
	},
	{
		category: "Lycon Strip Wax",
		items: [
			{ name: "Body Waxing - Lycon Strip Wax - Full Arms", duration: "30m", price: "AED 95", description: "Gentle and effective hair removal using Lycon strip wax for smooth, soft arms. Ideal for long-lasting results." },
			{ name: "Body Waxing - Lycon Strip Wax - Half Arm", duration: "20m", price: "AED 65", description: "Hair removal for the lower or upper arms using Lycon strip wax, leaving skin clean, smooth, and refreshed." },
			{ name: "Body Waxing - Lycon Strip Wax - Full Back", duration: "30m", price: "AED 123", description: "Complete back waxing with Lycon strip wax to remove unwanted hair and leave the skin silky and polished." },
			{ name: "Body Waxing - Lycon Strip Wax - Half Back", duration: "25m", price: "AED 85", description: "Hair removal for the upper or lower back using Lycon strip wax, perfect for a clean and smooth finish." },
			{ name: "Body Waxing - Lycon Strip Wax - Full Stomach", duration: "20m", price: "AED 90", description: "Gentle and thorough hair removal from the full stomach area using Lycon strip wax, leaving skin soft and hair-free." },
			{ name: "Body Waxing - Lycon Strip Wax - Half Stomach", duration: "15m", price: "AED 55", description: "Targeted waxing for the upper or lower stomach using Lycon strip wax for a smooth, even result." },
			{ name: "Body Waxing - Lycon Strip Wax - Chest", duration: "20m", price: "AED 60", description: "Smooth and clean results with Lycon strip wax designed for chest hair removal. Gentle on the skin, effective on hair." },
			{ name: "Body Waxing - Lycon Strip Wax - Tummy Line", duration: "10m", price: "AED 40", description: "Precise hair removal along the tummy line using Lycon strip wax, leaving skin neat and smooth." },
			{ name: "Body Waxing - Lycon Strip Wax - Full Legs", duration: "40m", price: "AED 140", description: "Complete leg waxing with Lycon strip wax for long-lasting smoothness and a polished, hair-free finish." },
			{ name: "Body Waxing - Lycon Strip Wax - Half Legs", duration: "30m", price: "AED 95", description: "Hair removal for the upper or lower legs using Lycon strip wax for smooth and refreshed skin." },
			{ name: "Full Body - Lycon Strip Wax (Without Bikini)", duration: "1h 30m", price: "AED 380", description: "Premium full-body waxing using Lycon strip wax for smooth, hair-free skin from head to toe. Includes full arms, legs, back, stomach, and underarms — excludes bikini area." },
		]
	},
	{
		category: "Lycon Hot Wax",
		items: [
			{ name: "Lycon Hot Wax – Full Arms", duration: "35m", price: "AED 120", description: "Gentle hair removal using Lycon hot wax for smooth, soft arms. Ideal for sensitive skin and long-lasting results." },
			{ name: "Lycon Hot Wax – Half Arms", duration: "25m", price: "AED 85", description: "Effective hair removal for the lower or upper arms using Lycon hot wax, leaving the skin clean, soft, and hair-free." },
			{ name: "Lycon Hot Wax – Underarms", duration: "20m", price: "AED 60", description: "Quick and gentle underarm waxing with Lycon hot wax, perfect for sensitive skin and smooth results with minimal irritation." },
			{ name: "Lycon Hot Wax – Chest", duration: "25m", price: "AED 90", description: "Deep yet gentle waxing for the chest area using Lycon hot wax, providing smooth skin and a clean finish." },
			{ name: "Lycon Hot Wax – Tummy Line", duration: "15m", price: "AED 60", description: "Precise hair removal for the stomach or tummy line area using Lycon hot wax, leaving the skin soft and smooth." },
			{ name: "Lycon Hot Wax – Full Back", duration: "40m", price: "AED 180", description: "Complete back waxing with Lycon hot wax to remove unwanted hair and leave skin silky and refreshed." },
			{ name: "Lycon Hot Wax – Half Back", duration: "30m", price: "AED 120", description: "Hair removal for the upper or lower back using Lycon hot wax for a clean, smooth look." },
			{ name: "Lycon Hot Wax – Full Legs", duration: "55m", price: "AED 200", description: "Gentle and effective waxing for both legs using Lycon hot wax, leaving the skin soft, smooth, and hair-free." },
			{ name: "Lycon Hot Wax – Half Legs", duration: "40m", price: "AED 120", description: "Hair removal for the lower or upper legs with Lycon hot wax, providing a clean and smooth result." },
			{ name: "Lycon Hot Wax - Bikini Line", duration: "25m", price: "AED 90", description: "Gentle waxing for the bikini line using Lycon hot wax, designed for delicate skin with minimal discomfort." },
			{ name: "Lycon Hot Wax - Full Bikini (Front only Incl Labia)", duration: "30m", price: "AED 120", description: "Full bikini waxing with Lycon hot wax covering the front area including the labia for a clean and smooth result." },
			{ name: "Lycon Hot Wax - Brazilian Bikini (Front & Back)", duration: "45m", price: "AED 160", description: "Complete intimate waxing using Lycon hot wax, including both front and back areas, for perfectly smooth and clean skin." },
			{ name: "Lycon Hot Wax – Full Body (Without Brazilian)", duration: "1h 50m", price: "AED 460", description: "A premium full-body hair removal treatment using Lycon hot wax, specially formulated for sensitive skin. Provides smooth and long-lasting results with minimal discomfort. Includes full arms, legs, underarms, and other body areas (excluding Brazilian)." },
			{ name: "Lycon Hot Wax - Full Body (With Bikini)", duration: "2h", price: "AED 520", description: "Complete full-body waxing using Lycon hot wax, including arms, legs, underarms, back, and bikini area for a perfectly smooth finish." },
		]
	},
	{
		category: "Face Lycon Hot Wax",
		items: [
			{ name: "Lycon Hot Wax - Nose", duration: "15m", price: "AED 25", description: "Gentle hair removal for the nostril area using Lycon hot wax, leaving the nose clean and smooth with minimal discomfort." },
			{ name: "Lycon Hot Wax - Neck", duration: "15m", price: "AED 30", description: "Soft and precise waxing for the neck area using Lycon hot wax to remove fine hair and achieve a smooth, even finish." },
			{ name: "Lycon Hot Wax - Chin", duration: "20m", price: "AED 35", description: "Effective hair removal for the chin area using Lycon hot wax, perfect for sensitive skin and a clean result." },
			{ name: "Lycon Hot Wax – Upper Lip", duration: "20m", price: "AED 35", description: "Quick and gentle waxing for the upper lip area with Lycon hot wax, leaving skin soft and smooth." },
			{ name: "Lycon Hot Wax - Sides", duration: "15m", price: "AED 40", description: "Gentle waxing for the sides of the face using Lycon hot wax, removing fine hair for a clean and polished look." },
			{ name: "Lycon Hot Wax - Eyebrow", duration: "15m", price: "AED 50", description: "Precise eyebrow shaping and hair removal using Lycon hot wax for a clean, defined, and natural finish." },
			{ name: "Lycon Hot Wax - Full Face", duration: "30m", price: "AED 95", description: "Complete facial hair removal using Lycon hot wax, including eyebrows, sides, lip, and chin for a smooth, radiant complexion." },
		]
	},
	{
		category: "Threading",
		items: [
			{ name: "Threading Mid Eyebrow", duration: "15m", price: "AED 20", description: "Quick and precise hair removal between the eyebrows to clean and define the shape." },
			{ name: "Threading - Eyebrow", duration: "15m", price: "AED 60", description: "Expert eyebrow shaping and cleaning using the threading technique for a defined and natural look." },
			{ name: "Threading - Half Face w/o Eyebrow", duration: "30m", price: "AED 65", description: "Hair removal for half of the face using threading, excluding the eyebrow area. Leaves skin clean and smooth." },
			{ name: "Threading Full Face w/o Eyebrow", duration: "30m", price: "AED 100", description: "Complete facial threading excluding eyebrows. Removes fine hair for a soft, even, and polished complexion." },
			{ name: "Threading Full Face with Eyebrow", duration: "45m", price: "AED 155", description: "Full facial threading including eyebrows for a clean, well-shaped, and smooth appearance." },
			{ name: "Threading Upper Lip", duration: "15m", price: "AED 36", description: "Gentle threading to remove fine hair from the upper lip area, leaving the skin soft and hair-free." },
			{ name: "Threading - Chin", duration: "15m", price: "AED 36", description: "Precise chin threading for clean, smooth skin and a well-groomed appearance." },
			{ name: "Eyebrow Color", duration: "30m", price: "AED 75", description: "Enhance and define your natural brows with professional eyebrow tinting for a fuller and more polished look." },
		]
	},
	{
		category: "Classic Nails",
		items: [
			{ name: "Basic Manicure NO Polish", duration: "35m", price: "AED 90", description: "Simple nail care focused on cleaning and grooming. Includes nail cutting, shaping, and cuticle care to keep hands neat and healthy. No polish applied." },
			{ name: "Basic Pedicure NO Polish", duration: "45m", price: "AED 105", description: "Essential foot care that includes nail cutting, shaping, and cuticle cleaning for fresh and tidy feet. No polish applied." },
			{ name: "Express Classic Manicure", duration: "45m", price: "AED 95", description: "A quick and refreshing manicure that includes nail shaping, cuticle care, and polish application. Ideal for keeping hands neat, clean, and beautifully groomed in less time." },
			{ name: "Express Classic Pedicure", duration: "1h", price: "AED 115", description: "A quick and refreshing pedicure that includes nail shaping, cuticle care, and polish application. Perfect for maintaining neat, clean, and beautiful feet in less time." },
			{ name: "Russian Manicure", duration: "1h", price: "AED 120", description: "A precise dry manicure performed using a professional machine (e-file). This technique focuses on deep cuticle cleaning, detailed nail shaping, and perfect preparation of the nail bed for a flawless and long-lasting finish. Ideal for achieving clean, elegant, and well-groomed nails." },
			{ name: "Russian Pedicure", duration: "TBD", price: "Price TBD", description: "A detailed dry pedicure performed using a professional machine (e-file). This technique focuses on precise cuticle and hard skin cleaning, nail shaping, and perfect preparation of the nail surface. It leaves the feet smooth, clean, and beautifully refined with a flawless finish." },
			{ name: "Little Princess Manicure", duration: "1h", price: "AED 50", description: "A sweet manicure for kids including gentle nail shaping, light cleaning, and polish application in fun colors." },
			{ name: "Little Princess Pedicure", duration: "1h", price: "AED 50", description: "A gentle and fun pedicure designed for children. Includes light nail shaping, gentle cleaning, and polish application in a color of choice." },
			{ name: "Classic Change Polish Hand", duration: "30m", price: "AED 49", description: "Refresh your nails in minutes! Whether a quick refresh or preparing for a special event, we have you covered." },
			{ name: "Classic Polish Change Feet", duration: "30m", price: "AED 49", description: "Refresh your nails in minutes! Whether a quick refresh or preparing for a special event, we have you covered." },
		]
	},
	{
		category: "Hand & Feet Treatment",
		items: [
			{ name: "Deluxe Hot Sock Hand Treatment", duration: "1h", price: "AED 119", description: "A nourishing hand treatment using heated socks infused with rich moisturizing ingredients to deeply hydrate and soften the skin. Perfect for dry or tired hands, leaving them smooth and rejuvenated." },
			{ name: "Deluxe Hot Sock Foot Treatment", duration: "20m", price: "AED 119", description: "A deeply hydrating foot therapy using heated socks to soften rough skin, relieve dryness, and restore comfort. Leaves the feet smooth, refreshed, and beautifully cared for." },
			{ name: "Callus Treatment", duration: "45m", price: "AED 90", description: "A specialized foot care treatment designed to remove hardened skin and calluses safely and gently. Restores softness, smoothness, and comfort to the feet." },
		]
	},
	{
		category: "Gel Polish",
		items: [
			{ name: "Gel Manicure", duration: "1h 15m", price: "AED 135", description: "Chip resistant, long-lasting glossy nails. Includes precise nail shaping, cuticle care and rejuvenating hand massage." },
			{ name: "Gel Pedicure", duration: "1h 30m", price: "AED 145", description: "Chip resistant, long-lasting glossy nails. Includes precise nail shaping, cuticle care and rejuvenating foot massage." },
			{ name: "Gel Polish Change Hands", duration: "30m", price: "AED 75", description: "Gel polish application for bare nails (does not include removal)." },
			{ name: "Gel Polish Change Feet", duration: "30m", price: "AED 75", description: "Gel polish application for bare nails (does not include removal)." },
			{ name: "Gel Polish French", duration: "30m", price: "AED 85", description: "Elegant and timeless French-style gel polish application with a natural pink base and white tips for a classic, glossy finish that lasts." },
			{ name: "Gel Polish Removal Hand", duration: "30m", price: "AED 38", description: "Safe and careful removal of gel polish from nails using a professional method that prevents damage and keeps nails healthy and clean." },
			{ name: "Gel Polish Removal Feet", duration: "30m", price: "AED 38", description: "Gentle removal of gel polish from the nails using a safe and professional technique that protects the natural nail surface and prepares it for a fresh new application." },
		]
	},
	{
		category: "Nail Extensions",
		items: [
			{ name: "Soft Gel Removal", duration: "30m", price: "AED 70", description: "Safe and gentle removal of soft gel extensions using professional techniques that protect the natural nails and prepare them for a fresh new set or treatment." },
			{ name: "Acrylic Removal w/ Manicure", duration: "1h", price: "AED 140", description: "Complete removal of acrylic extensions followed by a nourishing manicure. Gently cleans and restores natural nails, leaving them healthy and smooth." },
			{ name: "Acrylic Rebalance (Natural)", duration: "2h", price: "AED 230", description: "Maintenance service to rebalance and refresh existing acrylic nails. Helps maintain shape, strength, and a natural polished look." },
			{ name: "Acrylic Overlay (Natural)", duration: "2h", price: "AED 285", description: "Application of acrylic overlay directly on the natural nails for added strength and a smooth, natural finish without extensions." },
			{ name: "Acrylic New Set (Natural)", duration: "2h", price: "AED 335", description: "Full set of natural-looking acrylic extensions designed to enhance nail length and strength with a flawless finish." },
			{ name: "Gel New Set (Natural)", duration: "2h", price: "AED 330", description: "Complete set of natural gel extensions that provide durable strength and a glossy, natural appearance. Perfect for long-lasting beauty." },
			{ name: "New Set (French)", duration: "2h", price: "AED 375", description: "Full set of gel extensions with a classic French finish — elegant pink base and white tips for a timeless look." },
			{ name: "Overlay (French)", duration: "2h", price: "AED 280", description: "French-style overlay applied directly on the natural nails to strengthen and protect while adding a beautiful, polished French finish." },
			{ name: "Overlay (Natural)", duration: "2h", price: "AED 280", description: "Natural overlay applied to the natural nails to add strength and shine without changing nail length. Perfect for everyday elegance." },
			{ name: "Gel Rebalance (French)", duration: "2h", price: "AED 250", description: "Maintenance service for gel French extensions to restore shape, strength, and perfect the classic white-tip finish." },
			{ name: "Gel Rebalance (Natural)", duration: "2h", price: "AED 240", description: "Regular upkeep for gel extensions to maintain nail balance, strength, and a clean natural look." },
			{ name: "Soft Gel Express Nail Extension", duration: "1h", price: "AED 260", description: "Quick and efficient nail extension using soft gel tips for instant length and a natural, flexible feel. Ideal for those who want beautiful nails in less time." },
			{ name: "Nail Repair", duration: "30m", price: "AED 35", description: "Targeted repair for broken or damaged nails to restore strength and smoothness. Perfect for maintaining healthy, well-groomed nails between services." },
		]
	},
	{
		category: "Hair",
		items: [
			{ name: "Tokio Express Treatment - Short Hair", duration: "15m", price: "AED 195", description: "A quick yet powerful repairing treatment designed for short hair. Enriched with premium Japanese ingredients to restore strength, shine, and smoothness in just one session." },
			{ name: "Tokio Express Treatment - Medium Hair", duration: "15m", price: "AED 250", description: "A fast and effective deep repair treatment for medium-length hair. Restores moisture, repairs damage, and leaves hair silky, shiny, and manageable." },
			{ name: "Tokio Express Treatment - Long Hair", duration: "15m", price: "AED 300", description: "A nourishing express treatment formulated to repair and strengthen long hair from root to tip. Provides intense hydration and long-lasting shine without weighing hair down." },
			{ name: "Tokio Inkarami Classic Treatment - Short Hair", duration: "1h 45m", price: "AED 850", description: "A professional deep-repair treatment for short hair using the original Japanese Tokio Inkarami formula. Restores damaged hair fibers, adds strength, and leaves hair smooth, shiny, and revitalized." },
			{ name: "Tokio Inkarami Classic Treatment - Medium Hair", duration: "2h", price: "AED 950", description: "A luxurious repair treatment that rebuilds keratin inside the hair structure for medium-length hair. Helps reduce breakage, restore softness, and enhance natural shine." },
			{ name: "Tokio Inkarami Classic Treatment - Long Hair", duration: "2h 30m", price: "AED 1050", description: "A deeply nourishing and reconstructive treatment for long hair. Strengthens each strand from the inside out, improves elasticity, and delivers silky smooth, healthy-looking hair." },
			{ name: "Kerastase Scalp Treatment", duration: "45m", price: "AED 315", description: "A targeted scalp therapy designed to purify, balance, and revitalize the scalp. Helps remove impurities, reduce dryness or oiliness, and create a healthy foundation for stronger, more beautiful hair." },
			{ name: "Kerastase Fusio Dose Treatment", duration: "40m", price: "AED 300", description: "A personalized in-salon treatment that instantly transforms hair with customized boosters and concentrates. Addresses multiple concerns such as dryness, damage, frizz, or dullness — leaving hair soft, shiny, and full of life." },
			{ name: "Kerastase Premiere Decalcify and Repair", duration: "45m", price: "AED 350", description: "An advanced repairing ritual that removes calcium buildup and strengthens hair from within. Restores smoothness, flexibility, and shine, leaving the hair light, silky, and deeply renewed." },
			{ name: "Kerastase Intense Reconstruction", duration: "55m", price: "AED 350", description: "A powerful repairing treatment that deeply restores damaged or over-processed hair. Rebuilds internal structure, replenishes moisture, and leaves hair stronger, softer, and visibly healthier." },
			{ name: "Kerastase Caviar Protocol", duration: "40m", price: "AED 550", description: "A luxurious hair ritual infused with caviar-inspired ingredients to nourish, revitalize, and add exceptional shine. Ideal for dull or tired hair that needs deep rejuvenation and premium care." },
			{ name: "Hair Xtreme Sleek - Roots", duration: "1h 30m", price: "AED 1000", description: "A root touch-up smoothing treatment that maintains sleek, frizz-free results. Perfect for controlling new growth and keeping hair smooth and manageable for up to six months." },
			{ name: "Hair Xtreme Sleek - Short", duration: "1h 30m", price: "AED 1500", description: "A professional smoothing treatment for short hair that eliminates frizz, enhances shine, and makes styling easier. Lasts 3 to 6 months for smooth, sleek results." },
			{ name: "Hair Xtreme Sleek - Medium", duration: "2h", price: "AED 1800", description: "A deep smoothing treatment for medium-length hair that reduces volume, controls frizz, and adds shine. Keeps hair soft, sleek, and manageable for up to six months." },
			{ name: "Hair Xtreme Sleek - Long", duration: "2h 30m", price: "AED 2500", description: "A nourishing and smoothing therapy for long hair designed to reduce frizz, enhance shine, and improve manageability while maintaining natural movement. Results last 3 to 6 months." },
			{ name: "Hair Xtreme Sleek - Very Long", duration: "3h", price: "AED 3000", description: "An intensive smoothing treatment for very long hair that deeply nourishes and controls frizz from roots to ends. Leaves hair silky, shiny, and sleek for up to six months." },
			{ name: "Hair Botox - Root", duration: "TBD", price: "AED 1000", description: "A root-focused rejuvenating treatment that smooths and strengthens new growth while reducing frizz. Helps maintain sleekness and shine from the roots for a fresh, healthy look." },
			{ name: "Hair Botox - Short", duration: "1h", price: "AED 1500", description: "A nourishing and repairing treatment for short hair that restores softness, eliminates frizz, and adds radiant shine. Perfect for achieving smooth and manageable hair." },
			{ name: "Hair Botox - Medium", duration: "1h 30m", price: "AED 1800", description: "Deep conditioning therapy for medium-length hair that revitalizes dry or damaged strands. Restores strength, smoothness, and silky texture while reducing frizz." },
			{ name: "Hair Botox - Long", duration: "2h", price: "AED 2200", description: "A luxurious smoothing treatment for long hair that rebuilds and hydrates from root to tip. Leaves hair soft, shiny, and frizz-free with natural movement." },
			{ name: "Hair Botox - Extra Long", duration: "2h 30m", price: "AED 2500", description: "An intensive repair treatment for extra-long hair that deeply nourishes, strengthens, and smooths each strand. Restores elasticity, shine, and manageability for a sleek, healthy finish." },
			{ name: "Hair Straightening - Seriously Sleek Root", duration: "1h", price: "AED 1000", description: "Root touch-up straightening treatment to maintain smooth, frizz-free results and manage new growth with natural shine." },
			{ name: "Hair Straightening - Seriously Sleek Short", duration: "1h", price: "AED 1400", description: "A professional smoothing treatment for short hair that reduces up to 80% of frizz while maintaining natural movement and shine. Leaves hair sleek, soft, and easy to style." },
			{ name: "Hair Straightening - Seriously Sleek Medium", duration: "1h 30m", price: "AED 1800", description: "A smoothing treatment for medium-length hair that tames frizz, enhances shine, and delivers sleek, manageable, and long-lasting results." },
			{ name: "Hair Straightening - Seriously Sleek Long", duration: "2h", price: "AED 2200", description: "Professional straightening for long hair that smooths frizz, reduces volume, and adds lasting shine and softness for a naturally elegant finish." },
			{ name: "Hair Straightening - Seriously Sleek Extra Long", duration: "2h 30m", price: "AED 2500", description: "A deep smoothing and straightening therapy for extra-long hair that delivers silky, frizz-free results with radiant shine and manageability." },
			{ name: "Hair Straightening Curl - Frizz Free Root", duration: "1h", price: "AED 550", description: "A root-area smoothing treatment that controls frizz and softens curls for a more defined, manageable, and shiny finish. Ideal for maintaining smoothness and easy styling." },
			{ name: "Hair Straightening Curl - Frizz Free Short", duration: "1h", price: "AED 750", description: "A professional anti-frizz treatment for short curly hair that smooths, softens, and enhances shine while preserving the hair's natural movement and bounce." },
			{ name: "Hair Straightening Curl - Frizz Free Medium", duration: "1h 30m", price: "AED 850", description: "A smoothing and defining treatment for medium-length curls. Reduces frizz, improves texture, and leaves hair silky, shiny, and easy to manage." },
			{ name: "Hair Straightening Curl - Frizz Free Long", duration: "2h", price: "AED 950", description: "A deep anti-frizz therapy for long, curly hair. Smooths and defines curls, reduces volume, and adds lasting shine and softness." },
			{ name: "Hair Straightening Curl - Frizz Free Extra Long", duration: "2h 30m", price: "AED 1100", description: "An intensive smoothing treatment for extra-long curly hair. Controls frizz from root to tip, defines natural curls, and leaves hair glossy, manageable, and beautifully soft." },
			{ name: "Sultana Spa's Nourishing Hair Oil Treatment", duration: "40m", price: "AED 350", description: "Sultana Spa's blend of natural oils is a luxurious treatment for damaged hair, promoting growth, length, and thickness. This blend contains pure natural oils to treat damaged hair, stimulate growth, and combat hair loss. The treatment includes a special scalp massage and hair massage, followed by steaming and thorough washing, concluding with a gentle hair drying." },
			{ name: "Sultana's Hydrating Glow Hair Treatment", duration: "25m", price: "AED 250", description: "A refreshing hydration treatment that restores moisture and shine to dull or dry hair. Leaves hair soft, glossy, and revitalized." },
			{ name: "Add On Curly", duration: "30m", price: "AED 55", description: "An additional styling option that enhances and defines natural curls or creates soft, bouncy waves for a voluminous finish." },
			{ name: "Hair Wash", duration: "25m", price: "AED 55", description: "A refreshing hair cleanse using professional shampoo and conditioner tailored to your hair type, leaving it soft, clean, and ready for styling." },
			{ name: "Blow Dry Short", duration: "35m", price: "AED 120", description: "A classic blow-dry using a round brush to smooth, shape, and add volume. Perfect for achieving a sleek, bouncy, and salon-fresh finish with long-lasting shine." },
			{ name: "Blow Dry Medium", duration: "45m", price: "AED 150", description: "A classic blow-dry using a round brush to smooth, shape, and add volume. Perfect for achieving a sleek, bouncy, and salon-fresh finish with long-lasting shine." },
			{ name: "Blow Dry Long", duration: "1h", price: "AED 180", description: "A classic blow-dry using a round brush to smooth, shape, and add volume. Perfect for achieving a sleek, bouncy, and salon-fresh finish with long-lasting shine." },
			{ name: "Blow Dry Very Long", duration: "1h 15m", price: "AED 220", description: "A classic blow-dry using a round brush to smooth, shape, and add volume. Perfect for achieving a sleek, bouncy, and salon-fresh finish with long-lasting shine." },
			{ name: "Waves Short Hair", duration: "1h", price: "AED 250", description: "Soft, natural waves for short hair that create subtle texture and movement. Ideal for a light, elegant everyday look." },
			{ name: "Waves Medium Hair", duration: "1h", price: "AED 300", description: "A styling service for medium-length hair that adds volume, bounce, and perfectly defined waves with a smooth finish." },
			{ name: "Waves Long Hair", duration: "1h 30m", price: "AED 350", description: "Glamorous and flowing waves for long hair that enhance shine and movement, leaving a polished and feminine look." },
			{ name: "Fringe Cut", duration: "30m", price: "AED 65", description: "A stylish trim or redesign of the fringe (bangs) to frame the face and refresh your overall look." },
			{ name: "Hair Trim", duration: "30m", price: "AED 150", description: "A light trim to remove split ends and maintain healthy, beautiful hair while keeping your current style." },
			{ name: "Hair Cut", duration: "35m", price: "AED 250", description: "A full haircut service that reshapes and revives your style with precision cutting, leaving hair soft, healthy, and perfectly balanced." },
			{ name: "Ammonia-Free Color – Add On (50 AED Extra)", duration: "15m", price: "AED 50", description: "A gentle, ammonia-free formula that respects the scalp and hair fiber. Perfect for sensitive clients seeking shine and color without irritation or damage." },
			{ name: "Root Color", duration: "45m", price: "AED 250", description: "A classic single-tone application that covers roots and refreshes color while maintaining a natural shine and healthy look. Ideal for touch-ups and gray coverage." },
			{ name: "Hair Color - Short", duration: "1h", price: "AED 350", description: "A full-head color service customized to enhance your skin tone and style. Formulated to nourish the hair while providing rich, vibrant, and long-lasting color results." },
			{ name: "Hair Color - Medium", duration: "1h", price: "AED 450", description: "Professional coloring for medium-length hair that enhances tone and shine. Enriched with Ionène G for strength, softness, and radiant color." },
			{ name: "Hair Color - Long", duration: "1h", price: "AED 550", description: "Complete color service for long hair using L'Oréal Majirel. Ensures even coverage from root to tip with vibrant, luminous, and silky-smooth results." },
			{ name: "Toner", duration: "45m", price: "AED 150", description: "Neutralizes unwanted tones after lightening and adds shine for a balanced, natural finish. Recommended after highlights, balayage, or bleaching." },
			{ name: "Toner", duration: "1h", price: "AED 250", description: "Neutralizes unwanted tones after lightening and adds shine for a balanced, natural finish. Recommended after highlights, balayage, or bleaching." },
			{ name: "Balayage / Contouring / Highlights / Air Touch / Ombre", duration: "3h", price: "AED 999", description: "A bespoke lightening technique combining balayage, contouring, and air touch for soft, multidimensional color transitions. Ideal for creating a modern, sun-kissed look with depth and movement." },
			{ name: "Balayage / Highlights / Ombre", duration: "3h", price: "AED 1499", description: "A bespoke lightening technique combining balayage, contouring, and air touch for soft, multidimensional color transitions. Ideal for creating a modern, sun-kissed look with depth and movement." },
			{ name: "Balayage / Highlights / Ombre", duration: "4h", price: "AED 1999", description: "A bespoke lightening technique combining balayage, contouring, and air touch for soft, multidimensional color transitions. Ideal for creating a modern, sun-kissed look with depth and movement." },
		]
	},
];

const reviews = [
	{ name: "Sarah M.", rating: 5, text: "Absolutely wonderful experience! The staff is professional and the treatments are exceptional. The Downtown location is beautifully designed and so relaxing.", treatment: "Sultana Royal Facial" },
	{ name: "Aisha K.", rating: 5, text: "Best spa in Dubai! I've been coming here for years and they never disappoint. The Golden Glow treatment is my favorite.", treatment: "Golden Glow Body Treatment" },
	{ name: "Emma L.", rating: 5, text: "Perfect place for a girls' day out. We did the Mother & Daughter package and loved every minute of it. Highly recommended!", treatment: "Mother & Daughter Package" },
];

export default function DowntownPage() {
	const [activeCategory, setActiveCategory] = useState("Hammam");
	const [openBookingFor, setOpenBookingFor] = useState<string | null>(null);

	const activeServices = services.find(service => service.category === activeCategory);
	const serviceCategories = services.map(service => service.category);

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<div className="py-6 px-4" style={{background: 'linear-gradient(to right, #F8F4EF, #C4A484)'}}>
				<div className="max-w-6xl mx-auto">
					<Link href="/" className="inline-flex items-center hover:opacity-80 mb-3 transition-colors" style={{color: '#5D4037'}}>
						<ArrowLeft className="h-4 w-4 mr-2" />
						Back to Locations
					</Link>
					<h1 className="text-3xl md:text-5xl font-light mb-3" style={{color: '#5D4037'}}>
						Sultana Spa Downtown
					</h1>
					<p className="text-lg md:text-xl max-w-3xl" style={{color: '#A78A7F'}}>
						Modern urban spa with breathtaking city views
					</p>
				</div>
			</div>

			{/* Services Section with Menu */}
			<div className="py-8 md:py-12 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-8">
						<h2 className="text-3xl md:text-4xl font-light mb-4" style={{color: '#5D4037'}}>Our Services</h2>
						<p className="text-lg" style={{color: '#A78A7F'}}>Choose your category to view our premium treatments</p>
					</div>

					{/* Service Category Menu */}
					<div className="mb-8">
						<div className="flex flex-wrap justify-center gap-2 md:gap-4">
							{serviceCategories.map((category) => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-200 text-sm md:text-base ${
										activeCategory === category
											? "text-white shadow-lg"
											: "bg-white border hover:bg-opacity-80"
									}`}
									style={{
										backgroundColor: activeCategory === category ? '#5D4037' : 'white',
										color: activeCategory === category ? 'white' : '#A78A7F',
										borderColor: '#C4A484'
									}}
								>
									{category}
								</button>
							))}
						</div>
					</div>
					
					{/* Active Category Services */}
					{activeServices && (
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{border: '1px solid #C4A484'}}>
							<div className="p-6" style={{background: 'linear-gradient(to right, #C4A484, #A78A7F)'}}>
								<h3 className="text-2xl font-medium text-white">{activeServices.category}</h3>
							</div>
							<div className="p-6">
								{activeServices.items.length === 0 ? (
									<p className="text-center" style={{color: '#A78A7F'}}>Coming soon.</p>
								) : (
									<div className="grid gap-6">
										{activeServices.items.map((service: ServiceItem, index: number) => (
											<div key={`${service.name}-${service.duration}-${index}`} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-xl hover:bg-opacity-50 transition-colors" style={{border: '1px solid #F8F4EF', backgroundColor: 'rgba(248, 244, 239, 0.3)'}}>
												<div className="flex-1">
													<h4 className="text-lg font-medium mb-1" style={{color: '#5D4037'}}>{service.name}</h4>
													<p className="mb-2 text-sm" style={{color: '#A78A7F'}}>{service.description}</p>
													{!service.priceOptions && (
														<p className="flex items-center text-sm" style={{color: '#A78A7F'}}>
															<Clock className="h-4 w-4 mr-1" />
															{service.duration}
														</p>
													)}
												</div>
												<div className="mt-4 md:mt-0 md:ml-6 flex flex-col md:items-end">
													<p className="text-2xl font-bold mb-2" style={{color: '#5D4037'}}>{service.price}</p>
													{service.priceOptions && (
														<p className="text-xs md:text-sm mb-3 text-right" style={{color: '#A78A7F'}}>
															{service.priceOptions.split('|').map((option, index, array) => (
																<span key={index}>
																	{option}
																	{index < array.length - 1 && (
																		<span className="font-bold"> | </span>
																	)}
																</span>
															))}
														</p>
													)}
                                                    <div className="relative">
                                                        <button
                                                            className="inline-flex items-center gap-2 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm hover:opacity-90"
                                                            style={{backgroundColor: '#5D4037'}}
                                                            aria-expanded={openBookingFor === `${service.name}-${service.duration}-${index}`}
                                                            onClick={() => setOpenBookingFor(openBookingFor === `${service.name}-${service.duration}-${index}` ? null : `${service.name}-${service.duration}-${index}`)}
                                                        >
                                                            <span>Book Now</span>
                                                            <ChevronDown
                                                                className={`h-4 w-4 transition-transform ${openBookingFor === `${service.name}-${service.duration}-${index}` ? 'rotate-180' : ''}`}
                                                            />
                                                        </button>
                                                        {openBookingFor === `${service.name}-${service.duration}-${index}` && (
                                                            <div
                                                                className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-lg shadow-lg border z-10 p-3"
                                                                style={{borderColor: '#C4A484'}}
                                                            >
                                                                <div className="flex flex-col gap-2">
                                                                    <a
                                                                        href="tel:+97145652323"
                                                                        className="text-white font-medium py-2 px-3 rounded-full text-xs text-center hover:opacity-90"
                                                                        style={{backgroundColor: '#5D4037'}}
                                                                    >
                                                                        Call
                                                                    </a>
                                                                    <a
                                                                        href="https://wa.me/971524420053"
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
												</div>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Location Info - Moved Below Services */}
			<div className="py-4 md:py-6 px-4" style={{backgroundColor: '#F8F4EF'}}>
				<div className="max-w-6xl mx-auto">
					{/* Desktop Layout - Compact */}
					<div className="hidden md:grid md:grid-cols-3 gap-4">
						<div className="bg-white rounded-lg p-4 shadow" style={{border: '1px solid #C4A484'}}>
							<h3 className="text-lg font-medium mb-2 flex items-center" style={{color: '#5D4037'}}>
								<MapPin className="h-4 w-4 mr-1" style={{color: '#C4A484'}} />
								Location
							</h3>
							<div className="space-y-1 text-sm">
								<a 
									href="https://www.google.com/maps/search/?api=1&query=Neer+al+Manzil+hotel,+Yansoon+9+-+Souk+Tamarhind+-+shop+16+Sheikh+Mohammed+bin+Rashid+Blvd+-+Downtown+Dubai+-+Dubai" 
									target="_blank" 
									rel="noopener noreferrer" 
									className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-xs text-center hover:opacity-90"
									style={{backgroundColor: '#5D4037'}}
								>
									Open Google Maps
								</a>
							</div>
						</div>

						<div className="bg-white rounded-lg p-4 shadow" style={{border: '1px solid #C4A484'}}>
							<h3 className="text-lg font-medium mb-2 flex items-center" style={{color: '#5D4037'}}>
								<Phone className="h-4 w-4 mr-1" style={{color: '#C4A484'}} />
								Contact & Booking
							</h3>
							<div className="space-y-2 text-sm">
								<div className="flex gap-2">
									<a 
										href="tel:+97145652323" 
										className="flex-1 text-white font-medium py-2 px-3 rounded-full transition-colors duration-200 text-xs text-center hover:opacity-90"
										style={{backgroundColor: '#5D4037'}}
									>
										Call
									</a>
									<a 
										href="https://wa.me/971524420053" 
										className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-full transition-colors duration-200 text-xs text-center"
									>
										WhatsApp
									</a>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-lg p-4 shadow" style={{border: '1px solid #C4A484'}}>
							<h3 className="text-lg font-medium mb-2 flex items-center" style={{color: '#5D4037'}}>
								<Instagram className="h-4 w-4 mr-1" style={{color: '#C4A484'}} />
								Follow Us
							</h3>
							<div className="space-y-1 text-sm" style={{color: '#A78A7F'}}>
								<a 
									href="https://www.instagram.com/sultanaspahammamdubai/" 
									target="_blank" 
									rel="noopener noreferrer"
									className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-xs text-center hover:opacity-90"
									style={{background: 'linear-gradient(to right, #C4A484, #A78A7F)'}}
								>
									@sultanaspahammamdubai
								</a>
							</div>
						</div>
					</div>

					{/* Mobile Layout - Always Expanded */}
					<div className="md:hidden space-y-4">
						<h3 className="text-2xl font-light mb-4 text-center" style={{color: '#5D4037'}}>Contact Us</h3>

						{/* Location Section */}
						<div className="bg-white rounded-lg shadow" style={{border: '1px solid #C4A484'}}>
							<div className="p-4">
								<div className="flex items-center mb-3">
									<MapPin className="h-4 w-4 mr-2" style={{color: '#C4A484'}} />
									<span className="font-medium" style={{color: '#5D4037'}}>Location</span>
								</div>
								<a
									href="https://www.google.com/maps/search/?api=1&query=Neer+al+Manzil+hotel,+Yansoon+9+-+Souk+Tamarhind+-+shop+16+Sheikh+Mohammed+bin+Rashid+Blvd+-+Downtown+Dubai+-+Dubai"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center hover:opacity-90 text-sm"
									style={{backgroundColor: '#5D4037'}}
								>
									Open Google Maps
								</a>
							</div>
						</div>

						{/* Contact Section */}
						<div className="bg-white rounded-lg shadow" style={{border: '1px solid #C4A484'}}>
							<div className="p-4">
								<div className="flex items-center mb-3">
									<Phone className="h-4 w-4 mr-2" style={{color: '#C4A484'}} />
									<span className="font-medium" style={{color: '#5D4037'}}>Contact & Booking</span>
								</div>
								<div className="flex gap-2">
									<a
										href="tel:+97145652323"
										className="flex-1 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center hover:opacity-90 text-sm"
										style={{backgroundColor: '#5D4037'}}
									>
										Call
									</a>
									<a
										href="https://wa.me/971524420053"
										className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center text-sm"
									>
										WhatsApp
									</a>
								</div>
							</div>
						</div>

						{/* Follow Us Section */}
						<div className="bg-white rounded-lg shadow" style={{border: '1px solid #C4A484'}}>
							<div className="p-4">
								<div className="flex items-center mb-3">
									<Instagram className="h-4 w-4 mr-2" style={{color: '#C4A484'}} />
									<span className="font-medium" style={{color: '#5D4037'}}>Follow Us</span>
								</div>
								<a
									href="https://www.instagram.com/sultanaspahammamdubai/"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center hover:opacity-90 text-sm"
									style={{background: 'linear-gradient(to right, #C4A484, #A78A7F)'}}
								>
									@sultanaspahammamdubai
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Reviews Section */}
			<div className="py-16 px-4" style={{backgroundColor: '#F8F4EF'}}>
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h3 className="text-4xl font-light mb-4" style={{color: '#5D4037'}}>What Our Clients Say</h3>
						<p className="text-lg" style={{color: '#A78A7F'}}>Real experiences from our valued guests</p>
					</div>
					
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{reviews.map((review) => (
							<div key={review.name} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow" style={{border: '1px solid #C4A484'}}>
								<div className="flex justify-center mb-4">
									{[...Array(review.rating)].map((_, i) => (
										<Star key={i} className="h-5 w-5 fill-current" style={{color: '#C4A484'}} />
									))}
								</div>
								<p className="italic mb-4 leading-relaxed" style={{color: '#A78A7F'}}>&ldquo;{review.text}&rdquo;</p>
								<div className="text-center">
									<p className="font-medium" style={{color: '#5D4037'}}>{review.name}</p>
									<p className="text-sm" style={{color: '#A78A7F'}}>{review.treatment}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<div className="py-16 px-4" style={{background: 'linear-gradient(to right, #C4A484, #A78A7F)'}}>
				<div className="max-w-4xl mx-auto text-center text-white">
					<h3 className="text-4xl font-light mb-6">Ready to Experience Luxury?</h3>
					<p className="text-xl mb-8 opacity-90">Call us today and discover why we're Dubai's premier spa destination</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a 
							href="tel:+97145652323"
							className="border-2 border-white text-white hover:bg-white font-medium py-4 px-8 rounded-full transition-colors duration-200 text-lg inline-block text-center"
							style={{
								borderColor: 'white'
							}}
							onMouseEnter={(e) => {
								(e.target as HTMLAnchorElement).style.backgroundColor = 'white';
								(e.target as HTMLAnchorElement).style.color = '#5D4037';
							}}
							onMouseLeave={(e) => {
								(e.target as HTMLAnchorElement).style.backgroundColor = 'transparent';
								(e.target as HTMLAnchorElement).style.color = 'white';
							}}
						>
							Call Us Now
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}


