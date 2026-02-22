"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Phone, MapPin, Star, Instagram, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import LocalBusinessSchema from "../../components/LocalBusinessSchema";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

interface ServiceItem {
  name: string;
  duration: string;
  price: string;
  description: string;
  priceOptions?: string;
}

interface ServiceSection {
  name: string;
  items: ServiceItem[];
}

interface ServiceCategory {
  category: string;
  items?: ServiceItem[];
  sections?: ServiceSection[];
}

function sectionId(sectionName: string): string {
  return sectionName.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

const services: ServiceCategory[] = [
  {
    category: "Hammam",
    items: [
      { name: "Basic Hammam", duration: "45 min", price: "AED 250", description: "A refreshing hammam experience including steam, black soap cleansing, and light exfoliation." },
      { name: "Basic Princess Hammam (Ages 5–10)", duration: "45 min", price: "AED 150", description: "Gentle hammam experience for children including light steam, mild cleansing, and soft exfoliation using child-friendly products. Adult companion required at all times." },
      { name: "Traditional Hammam", duration: "60 min", price: "AED 350", description: "Full traditional Moroccan hammam including steam, black soap, kessa exfoliation, body mask, and rinse." },
      { name: "Detox Hammam", duration: "75 min", price: "AED 550", description: "Deep cleansing hammam ritual designed to detoxify the body, improve circulation, and refresh the skin." },
      { name: "Royal Hammam", duration: "90 min", price: "AED 650", description: "Luxury hammam experience with extended exfoliation, premium masks, and a full body cleansing ritual." },
      { name: "Blue Nila Body Mask", duration: "15 min", price: "AED 75", description: "Brightens and evens skin tone, leaving the skin radiant with a Moroccan glow." },
      { name: "Body Mask with Henna", duration: "15 min", price: "AED 60", description: "Cools, detoxifies, and soothes the skin using natural henna." },
      { name: "Coffee Body Mask", duration: "15 min", price: "AED 75", description: "Exfoliates, firms, and boosts circulation to help reduce cellulite." },
      { name: "Ghassoul Clay Body Mask", duration: "15 min", price: "AED 75", description: "Mineral-rich Moroccan clay that deeply cleanses, softens, and purifies the skin." },
      { name: "Kessa Glove", duration: "15 min", price: "AED 65", description: "Traditional deep exfoliation using a kessa glove to remove dead skin and restore smoothness." },
    ]
  },
  {
    category: "Massage",
    items: [
      { name: "Sensory Awakening Candle Massage", duration: "60 min", price: "AED 550", description: "Deeply relaxing massage using warm scented candles that melt into nourishing oil, calming the senses and hydrating the skin." },
      { name: "Emerald Oxygenating Thai Massage", duration: "60 min", price: "AED 350", description: "Full-body Thai massage to release tension, improve mobility, and revitalize the body." },
      { name: "Emerald Oxygenating Thai Massage", duration: "90 min", price: "AED 480", description: "Extended Thai massage for deep muscle work and complete body renewal." },
      { name: "Energizing Deep Tissue Massage", duration: "60 min", price: "AED 400", description: "Targeted deep tissue massage to relieve chronic muscle tension and stress." },
      { name: "Energizing Deep Tissue Massage", duration: "90 min", price: "AED 495", description: "Extended deep tissue massage for intensive muscle recovery and pain relief." },
      { name: "Blissful Bloom Pregnancy Massage with Argan Oil", duration: "60 min", price: "AED 350", description: "Gentle prenatal massage using nourishing argan oil to ease muscle tension and promote relaxation." },
      { name: "Blissful Bloom Pregnancy Massage with Argan Oil", duration: "90 min", price: "AED 495", description: "Extended prenatal massage for deeper relaxation and full-body comfort." },
      { name: "Serenity Relaxation Massage", duration: "30 min", price: "AED 200", description: "Short relaxation massage focusing on stress relief and gentle muscle relaxation." },
      { name: "Serenity Relaxation Massage", duration: "60 min", price: "AED 300", description: "Full-body relaxation massage to calm the mind and release tension." },
      { name: "Serenity Relaxation Massage", duration: "90 min", price: "AED 450", description: "Extended relaxation massage for deep rest and total body calm." },
      { name: "Lymphatic Drainage Massage", duration: "60 min", price: "AED 400", description: "Gentle rhythmic massage to stimulate lymphatic flow, reduce fluid retention, and detoxify the body." },
      { name: "Lymphatic Drainage Massage", duration: "90 min", price: "AED 495", description: "Extended lymphatic drainage massage for enhanced detoxification and circulation support." },
      { name: "Hot Stone Serenity Massage", duration: "60 min", price: "AED 400", description: "Relaxing massage using warm basalt stones to ease muscle tension and improve circulation." },
      { name: "Hot Stone Serenity Massage", duration: "90 min", price: "AED 495", description: "Extended hot stone massage for deep muscle relaxation and stress relief." },
      { name: "Chair Head and Shoulder Massage (Nail Area)", duration: "20 min", price: "AED 95", description: "Relaxing seated massage in the nail area, focusing on head, neck, and shoulders." },
      { name: "Face Massage (Nail Area)", duration: "30 min", price: "AED 180", description: "Relaxing facial massage in the nail area to relieve tension and improve circulation." },
      { name: "Foot Massage (Nail Area)", duration: "30 min", price: "AED 95", description: "Relaxing massage in the nail area to relieve foot tension and improve circulation." },
    ]
  },
  {
    category: "Facial",
    items: [
      { name: "Deep Clean & Glow Lift Facial", duration: "60 min", price: "AED 395", description: "Deep cleansing facial combined with lifting and glow-boosting techniques to refresh and revitalize the skin." },
      { name: "Glow Lift Face & Neck", duration: "80 min", price: "AED 595", description: "Advanced lifting facial targeting the face and neck to improve firmness, tone, and radiance." },
      { name: "Express Facial by Dermalogica", duration: "30 min", price: "AED 220", description: "Targeted express facial using Dermalogica products to cleanse and refresh the skin." },
      { name: "Express Facial by La Sultane de Saba", duration: "30 min", price: "AED 220", description: "Express facial using La Sultane de Saba products to nourish and brighten the skin." },
      { name: "Signature Hydrofacial", duration: "30 min", price: "AED 650", description: "Essential hydrofacial treatment to cleanse, exfoliate, and hydrate the skin." },
      { name: "Deluxe Hydrofacial", duration: "45 min", price: "AED 800", description: "Advanced hydrofacial treatment including extended exfoliation, hydration, and glow enhancement." },
      { name: "Platinum Hydrofacial", duration: "60 min", price: "AED 1000", description: "Elevate your skincare journey with our Platinum Hydrofacial, designed to pamper and transform your skin. This treatment combines deep cleansing and invigorating hydration, enriched by potent skin boosters tailored to your needs. Relax as your skin is infused with nourishing serums that smooth, brighten, and rejuvenate, leaving you with a healthy, radiant complexion." },
    ]
  },
  {
    category: "Hair",
    sections: [
      {
        name: "Hair Wash",
        items: [
          { name: "Kérastase Hair Wash & Quick Dry – Short Hair", duration: "10 min", price: "AED 60", description: "Hair wash with Kérastase shampoo followed by a light towel and quick dry for short hair." },
          { name: "Kérastase Hair Wash & Quick Dry – Medium Hair", duration: "15 min", price: "AED 80", description: "Hair wash with Kérastase products and quick dry suitable for medium-length hair." },
          { name: "Kérastase Hair Wash & Quick Dry – Long Hair", duration: "15 min", price: "AED 100", description: "Hair wash using Kérastase products with quick dry for long hair." },
          { name: "Kérastase Hair Wash & Quick Dry – Very Long Hair", duration: "20 min", price: "AED 120", description: "Hair wash using Kérastase products with extended drying time for very long hair." },
        ]
      },
      {
        name: "Blowdry",
        items: [
          { name: "Blowdry – Short", duration: "35 min", price: "AED 120", description: "Blowdry styling for short hair using professional tools and products." },
          { name: "Blowdry – Medium", duration: "45 min", price: "AED 140", description: "Blowdry styling for medium-length hair with smooth or voluminous finish." },
          { name: "Blowdry – Long", duration: "60 min", price: "AED 160", description: "Blowdry styling for long hair with lasting shape and shine." },
          { name: "Blowdry – Extra Long", duration: "70 min", price: "AED 180", description: "Blowdry styling for extra-long or very thick hair." },
          { name: "Iron (Add-On)", duration: "25 min", price: "AED 60", description: "Hair straightening or curling using a professional iron, added to any blowdry." },
          { name: "Add-On Hair Wash", duration: "15 min", price: "AED 25", description: "Additional hair wash added to a styling or haircut service." },
        ]
      },
      {
        name: "Hairstyling",
        items: [
          { name: "Waves – Short Hair", duration: "60 min", price: "AED 250", description: "Styled waves for short hair using professional styling techniques." },
          { name: "Waves – Medium", duration: "60 min", price: "AED 300", description: "Soft or defined waves for medium-length hair." },
          { name: "Waves – Long Hair", duration: "90 min", price: "AED 350", description: "Styled waves for long hair with volume and hold." },
          { name: "Waves – Extra Long", duration: "120 min", price: "AED 400", description: "Detailed wave styling for extra-long or very thick hair." },
          { name: "Events Hairstyling", duration: "60 min", price: "AED 500", description: "Customized hairstyling for events, parties, or special occasions." },
          { name: "Simple Hairstyling", duration: "60 min", price: "AED 400", description: "A polished and effortless hairstyling service designed to enhance your natural look. Includes professional blow-drying and basic styling such as soft waves, curls, or smooth straightening. Ideal for everyday elegance, casual outings, or light occasions." },
          { name: "Bridal Hairstyling", duration: "90 min", price: "AED 1500", description: "Luxury bridal hairstyling including consultation and a long-lasting finish." },
        ]
      },
      {
        name: "Haircut",
        items: [
          { name: "Hair Trim", duration: "30 min", price: "AED 85", description: "Light trim to refresh hair ends and maintain shape." },
          { name: "Fringe Cut", duration: "30 min", price: "AED 65", description: "Fringe or bangs cut and shaping." },
          { name: "Haircut", duration: "40 min", price: "AED 165", description: "Full professional haircut including consultation and styling finish." },
        ]
      },
      {
        name: "Curl Control",
        items: [
          { name: "Curl Control – Short Hair", duration: "60 min", price: "AED 750", description: "Designed to reduce frizz and enhance smoothness for short hair while keeping light body and shape." },
          { name: "Curl Control – Medium Hair", duration: "90 min", price: "AED 800", description: "Ideal for shoulder-length hair needing volume control and a smoother texture." },
          { name: "Curl Control – Long Hair", duration: "105 min", price: "AED 900", description: "Provides extended smoothing and shine for longer lengths while maintaining movement." },
          { name: "Curl Control – Extra Long Hair", duration: "120 min", price: "AED 1000", description: "Delivers full-length frizz control and sleek manageability for very long hair." },
        ]
      },
      {
        name: "Anti-Frizz",
        items: [
          { name: "Anti-Frizz Treatment – Short Hair", duration: "90 min", price: "AED 800", description: "Ideal for short styles needing smoothness, shine, and humidity control without heaviness." },
          { name: "Anti-Frizz Treatment – Medium Hair", duration: "120 min", price: "AED 1000", description: "Perfect for shoulder-length hair requiring frizz reduction and improved manageability." },
          { name: "Anti-Frizz Treatment – Long Hair", duration: "150 min", price: "AED 1250", description: "Designed to smooth and refine longer lengths, reducing bulk and enhancing shine." },
          { name: "Anti-Frizz Treatment – Extra Long Hair", duration: "165 min", price: "AED 1500", description: "Provides full-length smoothing and maximum frizz control for very long hair." },
        ]
      },
      {
        name: "Kérastase Treatments",
        items: [
          { name: "Kérastase Scalp Treatment", duration: "10 min", price: "AED 180", description: "Scalp-focused treatment to detoxify, balance, and improve scalp health." },
          { name: "Kérastase Fusio-Dose Express Service", duration: "20 min", price: "AED 180", description: "Concentrated express treatment customized to instantly address hair concerns." },
          { name: "Kérastase Fusio-Dose with Mask Service", duration: "30 min", price: "AED 300", description: "Concentrated express treatment with a nourishing mask, customized to address hair concerns." },
          { name: "Kérastase Intense Reconstruction Treatment", duration: "55 min", price: "AED 350", description: "Deep repair treatment designed to strengthen and rebuild damaged hair fibers." },
          { name: "Kérastase Première Decalcify and Repair", duration: "40 min", price: "AED 350", description: "Advanced treatment to remove calcium buildup and repair hair from the inside." },
          { name: "The Kérastase Caviar Protocol", duration: "40 min", price: "AED 550", description: "An ultra-luxury rejuvenating hair ritual designed to restore strength, softness, and luminous shine. Combines concentrated nourishing actives inspired by caviar to deeply revitalize weakened, dry, or aging hair. Works from scalp to ends to reinforce the hair fiber, improve elasticity, and restore a silky, smooth finish. A relaxing massage enhances absorption." },
        ]
      },
      {
        name: "Sultana Signature Hair",
        items: [
          { name: "Sultana Spa's Nourishing Hair Oil Treatment", duration: "90 min", price: "AED 350", description: "A luxurious natural oil treatment designed to deeply nourish damaged hair, stimulate healthy growth, reduce hair loss, and improve thickness. Includes a relaxing scalp massage to boost blood circulation, steam therapy for deep absorption, a professional wash, and a smooth blowdry finish." },
          { name: "Sultana's Hydrating Glow Hair Treatment", duration: "30 min", price: "AED 250", description: "Hydration treatment that restores moisture and shine to dull or dry hair, leaving it soft and revitalized." },
        ]
      },
    ]
  },
  {
    category: "Hair Straightening",
    items: [
      { name: "Hair Straightening – Roots Only", duration: "120 min", price: "AED 950", description: "Hair straightening treatment focused on regrowth and the root area to maintain smoothness." },
      { name: "Hair Straightening – Short Hair", duration: "180 min", price: "AED 1250", description: "Ideal for short cuts needing smoothness and frizz control while maintaining natural body and lightness." },
      { name: "Hair Straightening – Medium Hair", duration: "150 min", price: "AED 1650", description: "Perfect for shoulder-length hair requiring volume control, sleek texture, and easier daily styling." },
      { name: "Hair Straightening – Long Hair", duration: "120 min", price: "AED 1850", description: "Designed to smooth and refine longer lengths, reducing bulk and enhancing shine from roots to ends." },
      { name: "Hair Straightening – Very Long Hair", duration: "180 min", price: "AED 2500", description: "Provides full-length smoothing and control for extra-long hair, delivering a polished, ultra-sleek finish with lasting manageability." },
    ]
  },
  {
    category: "Hair Color",
    items: [
      { name: "Root Color", duration: "60 min", price: "AED 250", description: "Root color application using L'Oréal Majirel to cover regrowth evenly." },
      { name: "Root Color – Ammonia-Free", duration: "60 min", price: "AED 295", description: "Ammonia-free root color using L'Oréal Majirel for a sensitive scalp." },
      { name: "Root Color – Client's Own Color", duration: "60 min", price: "AED 150", description: "Root color application using the client's own color product." },
      { name: "Hair Color – Short Hair", duration: "60 min", price: "AED 350", description: "Full hair color application for short hair using L'Oréal Majirel." },
      { name: "Hair Color – Medium Length", duration: "60 min", price: "AED 450", description: "Full hair color application for medium-length hair using L'Oréal Majirel." },
      { name: "Hair Color – Long Hair", duration: "60 min", price: "AED 550", description: "Full hair color application for long hair using L'Oréal Majirel." },
      { name: "Hair Color – Extra Long Hair", duration: "60 min", price: "AED 650", description: "Full hair color application for extra-long hair using L'Oréal Majirel." },
      { name: "Henna Application – Short Hair", duration: "20 min", price: "AED 40", description: "Henna application (client brings own henna)." },
      { name: "Henna Application – Medium Hair", duration: "25 min", price: "AED 60", description: "Henna application (client brings own henna)." },
      { name: "Henna Application – Long Hair", duration: "30 min", price: "AED 90", description: "Henna application (client brings own henna)." },
      { name: "Balayage", duration: "From 180 min", price: "From AED 999", description: "Balayage coloring technique for a natural, sun-kissed blended look." },
      { name: "Contouring", duration: "From 180 min", price: "From AED 999", description: "Face-framing contour highlights to enhance dimension and shape." },
      { name: "Highlights", duration: "From 180 min", price: "From AED 999", description: "Classic highlights to add brightness and depth throughout the hair." },
      { name: "Toner – Short", duration: "30 min", price: "AED 105", description: "Toner service for short hair to neutralize or enhance color tone." },
      { name: "Toner – Medium", duration: "45 min", price: "AED 155", description: "Toner service for medium-length hair to refresh and balance color." },
      { name: "Toner – Long", duration: "20 min", price: "AED 180", description: "Toner service for long hair to correct or enhance color tone." },
      { name: "Toner – Extra Long", duration: "70 min", price: "AED 255", description: "Toner service for extra-long or thick hair to perfect color tone." },
    ]
  },
  {
    category: "Nail Care",
    items: [
      { name: "Classic Manicure", duration: "60 min", price: "AED 85", description: "Manicure including nail shaping, cuticle care, and polish application." },
      { name: "Classic Pedicure", duration: "60 min", price: "AED 90", description: "Pedicure including nail shaping, cuticle care, and polish application." },
      { name: "Basic Manicure", duration: "45 min", price: "AED 75", description: "Express manicure including nail shaping and cuticle care. No polish applied." },
      { name: "Basic Pedicure", duration: "50 min", price: "AED 80", description: "Express pedicure including nail shaping, cuticle care, and foot care. No polish applied." },
      { name: "Russian Manicure", duration: "45 min", price: "AED 120", description: "Detailed dry manicure focusing on precise cuticle work. No polish included." },
      { name: "Russian Pedicure", duration: "50 min", price: "AED 140", description: "Detailed dry pedicure with advanced cuticle and nail care. No polish included." },
      { name: "Polish Application – Hands", duration: "20 min", price: "AED 45", description: "Nail shaping and polish application only on hands." },
      { name: "Polish Application – Feet", duration: "25 min", price: "AED 50", description: "Nail shaping and polish application only on feet." },
      { name: "Little Princess Manicure", duration: "25 min", price: "AED 50", description: "Gentle manicure for children including light nail care and polish." },
      { name: "Little Princess Pedicure", duration: "30 min", price: "AED 50", description: "Gentle pedicure for children including light foot care and polish." },
      { name: "Toes Buff & Shine", duration: "20 min", price: "AED 55", description: "Buffing and shining of toenails for a natural glossy finish." },
      { name: "Add-On – Ingrown Removal", duration: "30 min", price: "AED 50", description: "Safe removal of dry skin and ingrown nails." },
      { name: "Nail Cut & File", duration: "15 min", price: "AED 25", description: "Nail trimming, shaping, and filing only." },
      { name: "Natural Nail Repair", duration: "15 min", price: "AED 35", description: "Repair and strengthening of damaged natural nails." },
      { name: "Callus Treatment", duration: "30 min", price: "AED 90", description: "Callus treatment using a foot file to remove rough and hard skin from the soles of the feet." },
      { name: "Deluxe Hot Sock Foot Treatment", duration: "25 min", price: "AED 80", description: "Paraffin foot treatment enriched with Swiss Apple to hydrate, nourish, and protect the skin." },
      { name: "Deluxe Hot Sock Glove Hand Treatment", duration: "20 min", price: "AED 85", description: "Paraffin hand treatment enriched with Swiss Apple to hydrate, nourish, and protect the skin." },
      { name: "Sultana Signature Treatment", duration: "25 min", price: "AED 80", description: "High-performance hand treatment using advanced technology to firm, contour, and rejuvenate the skin." },
      { name: "Brightening Hand Mask", duration: "15 min", price: "AED 25", description: "Vitamin C–infused mask to brighten skin and improve tone." },
      { name: "Moisturizing Hand Mask", duration: "15 min", price: "AED 25", description: "Collagen-rich mask to deeply hydrate and restore elasticity." },
      { name: "Lifting Hand Mask", duration: "15 min", price: "AED 25", description: "Peptide-based mask to improve firmness, elasticity, and hydration." },
    ]
  },
  {
    category: "Nail Extensions & Enhancements",
    items: [
      { name: "Long-Lasting Color Removal", duration: "20 min", price: "AED 25", description: "Safe and effective removal of gel polish without damaging the natural nail. Includes professional gel breakdown, gentle removal, nail plate cleansing, light buff if needed, and cuticle oil nourishment." },
      { name: "Acrylic Removal", duration: "30 min", price: "AED 75", description: "Safe removal of acrylic extensions using a controlled soak-off method. Includes professional acrylic breakdown, gentle product removal, nail plate cleansing, light surface smoothing if needed, and cuticle oil nourishment." },
      { name: "Acrylic Removal with Manicure", duration: "60 min", price: "AED 140", description: "Safe removal of acrylic extensions followed by a restorative classic manicure. Includes professional acrylic soak-off, nail plate cleansing, cuticle care and shaping, light buffing, and nourishing cuticle oil." },
      { name: "Gel Manicure", duration: "60 min", price: "AED 150", description: "Complete manicure with long-lasting gel polish. Includes nail shaping, cuticle care, nail plate preparation, premium gel polish application, glossy or matte top coat, and cuticle oil. Lasts up to 3–4 weeks." },
      { name: "Gel French Manicure", duration: "60 min", price: "AED 170", description: "Complete manicure with a classic French gel finish. Includes nail shaping, cuticle care, nail plate preparation, gel base, French tip design, high-shine top coat, and cuticle oil. Lasts up to 3–4 weeks." },
      { name: "Gel Pedicure", duration: "60 min", price: "AED 160", description: "Complete pedicure with long-lasting gel polish. Includes nail shaping, cuticle care, nail plate preparation, premium gel polish, glossy or matte top coat, and cuticle oil finish. Lasts up to 4 weeks." },
      { name: "Gel Russian Manicure", duration: "130 min", price: "AED 180", description: "Advanced dry-technique manicure using an e-file for precise cuticle refinement and flawless gel application. Includes nail shaping, Russian cuticle work, nail preparation, premium gel color, and top coat. Lasts up to 3–4 weeks." },
      { name: "Gel Russian Pedicure", duration: "120 min", price: "AED 210", description: "Meticulous dry-technique pedicure using an e-file for a clean, refined cuticle finish. Includes nail shaping, Russian cuticle work, nail preparation, premium gel polish, and top coat. Lasts up to 4 weeks." },
      { name: "Gel Polish Change – Hands", duration: "35 min", price: "AED 60", description: "Quick gel color refresh without manicure. Includes light nail shaping if needed and professional gel polish application." },
      { name: "Gel Polish Change – Feet", duration: "35 min", price: "AED 65", description: "Express gel color application without pedicure. Includes light nail shaping and professional gel polish application. No cuticle or callus treatment included." },
      { name: "Gel Polish French", duration: "45 min", price: "AED 75", description: "Classic French finish with gel polish application (no manicure included). Includes light nail shaping and precise French tip design." },
      { name: "Gel Refill & Reshaping (Natural Gel Nails)", duration: "60 min", price: "AED 150", description: "Maintenance service to refill regrowth and restore nail shape. Includes gel refill, reshaping, surface refinement, and top coat finish." },
      { name: "Gel Rebalance French", duration: "60 min", price: "AED 165", description: "Maintenance service to refill regrowth and restore nail shape with a French finish. Includes gel refill, reshaping, surface refinement, and top coat finish." },
      { name: "New Set (Natural) – Gel", duration: "45 min", price: "AED 180", description: "Full gel overlay on natural nails to add strength and structure. Ideal for clients who want durable, well-shaped nails with a clean, long-lasting finish." },
      { name: "New Set (Natural) – Acrylic", duration: "75 min", price: "AED 260", description: "Full acrylic set for durable, well-structured nails." },
      { name: "New Set (French) – Gel", duration: "80 min", price: "AED 270", description: "Full set of gel extensions with a classic French finish." },
      { name: "Overlay (Natural)", duration: "60 min", price: "AED 195", description: "Protective gel layer applied over natural nails to add strength and durability. Ideal for weak or brittle nails." },
      { name: "Overlay (Natural) – with Color", duration: "70 min", price: "AED 210", description: "Acrylic overlay applied over natural nails to add strength and durability without extensions." },
      { name: "Add-On – Chrome (Full Set)", duration: "30 min", price: "AED 120", description: "Chrome powder application on full nail set." },
      { name: "Add-On – Chrome (Per Nail)", duration: "15 min", price: "AED 15", description: "Chrome effect applied to a single nail." },
      { name: "Add-On – Express Nail Art", duration: "15 min", price: "AED 15", description: "Simple nail art design." },
      { name: "Add-On – Gel Polish French", duration: "30 min", price: "AED 60", description: "French gel polish add-on." },
      { name: "Add-On – Ombre Regular Polish", duration: "30 min", price: "AED 60", description: "Ombre effect using regular polish." },
      { name: "Add-On – Ombre Gel Polish", duration: "35 min", price: "AED 105", description: "Ombre effect using gel polish." },
    ]
  },
  {
    category: "Waxing",
    items: [
      { name: "Lycon Strip Wax – Half Legs", duration: "25 min", price: "AED 95", description: "Strip wax hair removal from knees to ankles for smooth skin." },
      { name: "Lycon Strip Wax – Full Legs", duration: "40 min", price: "AED 140", description: "Strip wax hair removal for the entire leg area." },
      { name: "Lycon Strip Wax – Half Arms", duration: "15 min", price: "AED 65", description: "Strip wax hair removal from elbow to wrist." },
      { name: "Lycon Strip Wax – Full Arms", duration: "25 min", price: "AED 95", description: "Strip wax hair removal for the full arm area." },
      { name: "Lycon Strip Wax – Half Back", duration: "20 min", price: "AED 85", description: "Strip wax hair removal for upper or lower back area." },
      { name: "Lycon Strip Wax – Full Back", duration: "30 min", price: "AED 123", description: "Strip wax hair removal for the entire back area." },
      { name: "Lycon Strip Wax – Chest", duration: "20 min", price: "AED 60", description: "Strip wax hair removal for chest area." },
      { name: "Lycon Strip Wax – Tummy Line", duration: "10 min", price: "AED 40", description: "Strip wax hair removal along the tummy line." },
      { name: "Lycon Strip Wax – Toes", duration: "5 min", price: "AED 20", description: "Strip wax hair removal for toes." },
      { name: "Lycon Strip Wax – Full Body (Without Brazilian)", duration: "90 min", price: "AED 380", description: "Full body strip waxing excluding intimate areas." },
      { name: "Lycon Hot Wax – Underarms", duration: "10 min", price: "AED 60", description: "Hot wax hair removal for underarms, gentle on sensitive skin." },
      { name: "Lycon Hot Wax – Half Arms", duration: "20 min", price: "AED 85", description: "Hot wax hair removal for half arms." },
      { name: "Lycon Hot Wax – Full Arms", duration: "30 min", price: "AED 120", description: "Hot wax hair removal for full arms." },
      { name: "Lycon Hot Wax – Half Legs", duration: "30 min", price: "AED 120", description: "Hot wax hair removal from knees to ankles." },
      { name: "Lycon Hot Wax – Full Legs", duration: "45 min", price: "AED 200", description: "Hot wax hair removal for the full leg area." },
      { name: "Lycon Hot Wax – Half Back", duration: "25 min", price: "AED 120", description: "Hot wax hair removal for half back area." },
      { name: "Lycon Hot Wax – Full Back", duration: "40 min", price: "AED 180", description: "Hot wax hair removal for the entire back." },
      { name: "Lycon Hot Wax – Chest", duration: "25 min", price: "AED 90", description: "Hot wax hair removal for chest area." },
      { name: "Lycon Hot Wax – Bikini Line", duration: "20 min", price: "AED 90", description: "Hot wax hair removal along the bikini line." },
      { name: "Lycon Hot Wax – Full Bikini (Front Only, incl. Labia)", duration: "30 min", price: "AED 130", description: "Hot wax hair removal for full bikini front area." },
      { name: "Lycon Hot Wax – Brazilian Bikini (Front & Back)", duration: "45 min", price: "AED 160", description: "Complete Brazilian hot wax hair removal." },
      { name: "Lycon Hot Wax – Full Body (Without Brazilian)", duration: "90 min", price: "AED 460", description: "Full body hot waxing excluding Brazilian area." },
      { name: "Lycon Hot Wax – Full Body (With Brazilian)", duration: "120 min", price: "AED 520", description: "Full body hot waxing including Brazilian." },
      { name: "Lycon Hot Wax – Eyebrows", duration: "10 min", price: "AED 50", description: "Hot wax shaping and hair removal for eyebrows." },
      { name: "Lycon Hot Wax – Middle Eyebrows", duration: "5 min", price: "AED 20", description: "Hot wax hair removal between the eyebrows." },
      { name: "Lycon Hot Wax – Upper Lip", duration: "10 min", price: "AED 35", description: "Hot wax hair removal for upper lip area." },
      { name: "Lycon Hot Wax – Chin", duration: "15 min", price: "AED 35", description: "Hot wax hair removal for chin area." },
      { name: "Lycon Hot Wax – Nose", duration: "10 min", price: "AED 25", description: "Hot wax hair removal for nose area." },
      { name: "Lycon Hot Wax – Neck", duration: "15 min", price: "AED 75", description: "Hot wax hair removal for neck and hairline area." },
      { name: "Lycon Hot Wax – Full Face (Including Eyebrows)", duration: "30 min", price: "AED 160", description: "Full facial hot wax hair removal including eyebrows." },
      { name: "Lycon Hot Wax – Full Face (Without Eyebrows)", duration: "25 min", price: "AED 140", description: "Full facial hot wax hair removal excluding eyebrows." },
    ]
  },
  {
    category: "Threading & Eyebrows",
    items: [
      { name: "Eyebrow Color", duration: "20 min", price: "AED 55", description: "Eyebrow tinting to enhance brow shape and add depth and definition to the eyebrows." },
      { name: "Threading – Chin", duration: "15 min", price: "AED 25", description: "Precise threading hair removal for the chin area." },
      { name: "Threading – Eyebrow", duration: "20 min", price: "AED 45", description: "Eyebrow shaping using the traditional threading technique for a clean, defined look." },
      { name: "Threading – Mid Eyebrow", duration: "5 min", price: "AED 15", description: "Threading hair removal between the eyebrows." },
      { name: "Threading – Sides", duration: "25 min", price: "AED 40", description: "Threading hair removal for the sides of the face." },
      { name: "Threading – Upper Lip", duration: "15 min", price: "AED 36", description: "Gentle threading hair removal for the upper lip area." },
      { name: "Full Face Threading (With Eyebrow)", duration: "35 min", price: "AED 135", description: "Complete facial threading including eyebrows for smooth, even skin." },
      { name: "Full Face Threading (Without Eyebrow)", duration: "30 min", price: "AED 95", description: "Complete facial threading excluding eyebrow shaping." },
    ]
  },
  {
    category: "Lash & Brow",
    items: [
      { name: "Classic Natural Look", duration: "45 min", price: "AED 350", description: "Classic eyelash extension set for a natural, clean, and elegant look." },
      { name: "Russian Volume", duration: "45 min", price: "AED 450", description: "Volume eyelash extension set for a fuller, dramatic, and glamorous effect." },
      { name: "Lash Extension Removal", duration: "30 min", price: "AED 100", description: "Safe removal of eyelash extensions without damaging natural lashes." },
      { name: "Eyebrow Lamination", duration: "30 min", price: "AED 250", description: "Brow lamination treatment to lift, shape, and set eyebrows for a fuller appearance." },
      { name: "Eyelash Lamination", duration: "30 min", price: "AED 300", description: "Lash lift and lamination treatment to curl, lift, and enhance natural lashes." },
    ]
  },
  {
    category: "LPG",
    items: [
      { name: "LPG Anti-Cellulite & Lymphatic", duration: "45 min", price: "AED 370", description: "Focuses on stubborn fat areas and stimulates lymphatic drainage to improve circulation and reduce puffiness." },
      { name: "LPG Body Contouring & Lifting", duration: "45 min", price: "AED 370", description: "A targeted LPG treatment designed to reshape and sculpt the body by stimulating fat release, firming the skin, and lifting key areas such as the stomach, thighs, hips, or arms. Ideal for clients looking to reduce localized fat and improve body contours without surgery." },
      { name: "LPG Deep Lift & Firm", duration: "45 min", price: "AED 350", description: "This anti-aging LPG session focuses on firming the cheeks, jawline, and neck. It stimulates collagen to lift sagging skin and reduce fine lines — for smoother, more youthful skin without surgery." },
      { name: "LPG Eye & Lip Contour", duration: "15 min", price: "AED 180", description: "A precision LPG treatment that targets puffiness, dark circles, and fine lines around the eyes and lips. Gently smooths and lifts delicate areas for a refreshed, youthful look — perfect as an add-on or standalone." },
      { name: "LPG Face Contouring & Drainage Lift", duration: "30 min", price: "AED 270", description: "A targeted LPG treatment that defines the jawline, reduces puffiness, and drains facial water retention. Perfect for reshaping the lower face and refreshing tired features — ideal for double chin, round face, or facial bloating." },
      { name: "LPG Full Face & Neck Lift & Contour", duration: "60 min", price: "AED 420", description: "A complete LPG facial treatment that lifts and firms the entire face and neck. This session improves skin tone, reduces wrinkles, redefines contours, and drains puffiness — for a fully rejuvenated, youthful appearance." },
      { name: "LPG Lymphatic Drainage & Body Shaping", duration: "60 min", price: "AED 370", description: "A complete LPG session targeting the entire body to eliminate toxins, reduce cellulite, and stimulate lymphatic drainage. Ideal for improving circulation, body tone, and overall slimming results in a natural, non-invasive way." },
    ]
  },
];

const reviews = [
  {
    name: "Rasha Rteil",
    rating: 5,
    text: "I've tried almost every high end Hammam in Dubai, such as The One and Only Mirage, Jumeirah Zabeel, Talees Spa, Atlantis and every other 4-5 star hotel. I am not interested in the fancy architecture of the space and the massive hammam room which can host 10-15 women, or the lavish price and this BS, which many women care about in Dubai.\n\nFrom my experience in Hammam's this is by far the best one when it comes to, price, output, friendliness, and authenticity!!!!!\n\nSultana Spa puts effort in the technique of the scrubbing, the steam room is cozy but the steam is on point! And my favorite about this place is the spacious and full marble treatment room.\n\nThe space of the overall place is not big, but it's the treatment that has left me dropping all places moving forward and repeating my visit!\n\nMy hammam lady was Khadija, nice, strong hands, quick, and determined to get every inch of me stripped from dead skin! And she succeeded.\n\nThank you Sultana Spa!!!!",
    treatment: "Traditional Hammam"
  },
  {
    name: "Salma",
    rating: 5,
    text: "Excellent experience and very nice Hammam. I would highly recommend it. The staff were incredibly nice from Fatima-Ezzahra that welcome us in the spa to the amazing ladies who did the Moroccan bath for us. Nezha did my Moroccan bath and she was just amazing. I feel so refreshed and relaxed. Definitely ask for Nezha when you go. She is the best !!",
    treatment: "Moroccan Hammam"
  },
  {
    name: "Hanan El Sharif",
    rating: 5,
    text: "What words can I say to describe this spectacular authentic Moroccan spa. Sultana has been in UAE for 14+ years now and is still going strong. Yet I just discovered their original branch in Barsha this week. My mom and I had a Moroccan Hammam with Thuraya she was short of amazing, she was fantastic and I absolutely loved her. We had our massage with Siri and she is fabulous, went in with so much tension and came out another person.\n\nIn short, sultana is my favourite place for a self care and pamper day, their ambience is so relaxing and the entire staff are so friendly, respectful and amazing at what they do. They always have offers as well which is an added benefit. You won't regret coming here one bit.",
    treatment: "Moroccan Hammam & Massage"
  },
];

const ALBARSHA_PHONE = "+97143928242";
const ALBARSHA_WHATSAPP = "97143928242";

export default function AlBarshaPage() {
  const [activeCategory, setActiveCategory] = useState("Hammam");
  const [expandedReview, setExpandedReview] = useState<string | null>(null);
  const [openBookingFor, setOpenBookingFor] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeServices = services.find(service => service.category === activeCategory);
  const serviceCategories = services.map(service => service.category);

  return (
    <>
      <LocalBusinessSchema
        name="Sultana Spa Al Barsha"
        description="Luxury wellness sanctuary in the heart of Al Barsha, Dubai. Premium hammam treatments, relaxing massages, facials, hair services, and nail care."
        url="https://sultanaspa.com/spa/al-barsha"
        telephone="+97143928242"
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
          { name: "Al Barsha", url: "https://sultanaspa.com/spa/al-barsha" }
        ]}
      />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-6 px-4" style={{background: 'linear-gradient(to right, #F8F4EF, #C4A484)'}}>
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center hover:opacity-80 mb-3 transition-colors" style={{color: '#5D4037'}}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Locations
          </Link>
          <h1 className="text-3xl md:text-5xl font-light mb-3" style={{color: '#5D4037'}}>
            Sultana Spa Al Barsha
          </h1>
          <p className="text-lg md:text-xl max-w-3xl" style={{color: '#A78A7F'}}>
            Luxury wellness sanctuary in the heart of Al Barsha
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
                {activeServices.sections ? (
                  <>
                    <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b" style={{borderColor: '#C4A484'}}>
                      {activeServices.sections.map((section) => (
                        <button
                          key={section.name}
                          type="button"
                          onClick={() => document.getElementById(sectionId(section.name))?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                          className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                          style={{backgroundColor: 'rgba(197, 164, 132, 0.3)', color: '#5D4037', border: '1px solid #C4A484'}}
                        >
                          {section.name}
                        </button>
                      ))}
                    </div>
                    {activeServices.sections.map((section) => (
                      <div key={section.name} id={sectionId(section.name)} className="scroll-mt-4 mb-10">
                        <h4 className="text-xl font-medium mb-4" style={{color: '#5D4037'}}>{section.name}</h4>
                        <div className="grid gap-6">
                          {section.items.map((service: ServiceItem, index: number) => {
                            const serviceKey = `${section.name}-${service.name}-${service.duration}-${index}`;
                            return (
                              <div key={serviceKey} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-xl hover:bg-opacity-50 transition-colors" style={{border: '1px solid #F8F4EF', backgroundColor: 'rgba(248, 244, 239, 0.3)'}}>
                                <div className="flex-1">
                                  <h5 className="text-lg font-medium mb-1" style={{color: '#5D4037'}}>{service.name}</h5>
                                  <p className="mb-2 text-sm" style={{color: '#A78A7F'}}>{service.description}</p>
                                  {service.name !== "Add-on Loofa" && !service.priceOptions && (
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
                                      {service.priceOptions.split('|').map((option, optIndex, array) => (
                                        <span key={optIndex}>
                                          {option}
                                          {optIndex < array.length - 1 && (
                                            <span className="font-bold"> | </span>
                                          )}
                                        </span>
                                      ))}
                                    </p>
                                  )}
                                  {service.name !== "Add-on Loofa" && (
                                    <div className="relative">
                                      <button
                                        type="button"
                                        className="inline-flex items-center gap-2 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm hover:opacity-90"
                                        style={{backgroundColor: '#5D4037'}}
                                        aria-expanded={openBookingFor === serviceKey}
                                        onClick={() => setOpenBookingFor(openBookingFor === serviceKey ? null : serviceKey)}
                                      >
                                        <span>Book Now</span>
                                        <ChevronDown className={`h-4 w-4 transition-transform ${openBookingFor === serviceKey ? 'rotate-180' : ''}`} />
                                      </button>
                                      {openBookingFor === serviceKey && (
                                        <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-lg shadow-lg border z-10 p-3" style={{borderColor: '#C4A484'}}>
                                          <div className="flex flex-col gap-2">
                                            <a
                                              href="https://sultanaspa.zenoti.com/webstoreNew/services"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-white font-medium py-2 px-3 rounded-full text-xs text-center hover:opacity-90"
                                              style={{backgroundColor: '#5D4037'}}
                                            >
                                              Book Online
                                            </a>
                                            <a href={`tel:${ALBARSHA_PHONE}`} className="text-white font-medium py-2 px-3 rounded-full text-xs text-center hover:opacity-90" style={{backgroundColor: '#5D4037'}}>
                                              Call
                                            </a>
                                            <a href={`https://wa.me/${ALBARSHA_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-full text-xs text-center">
                                              WhatsApp
                                            </a>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="grid gap-6">
                    {activeServices.items?.map((service: ServiceItem, index: number) => {
                      const serviceKey = `${service.name}-${service.duration}-${index}`;
                      return (
                        <div key={serviceKey} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-xl hover:bg-opacity-50 transition-colors" style={{border: '1px solid #F8F4EF', backgroundColor: 'rgba(248, 244, 239, 0.3)'}}>
                          <div className="flex-1">
                            <h4 className="text-lg font-medium mb-1" style={{color: '#5D4037'}}>{service.name}</h4>
                            <p className="mb-2 text-sm" style={{color: '#A78A7F'}}>{service.description}</p>
                            {service.name !== "Add-on Loofa" && !service.priceOptions && (
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
                                {service.priceOptions.split('|').map((option, optIndex, array) => (
                                  <span key={optIndex}>
                                    {option}
                                    {optIndex < array.length - 1 && (
                                      <span className="font-bold"> | </span>
                                    )}
                                  </span>
                                ))}
                              </p>
                            )}
                            {service.name !== "Add-on Loofa" && (
                              <div className="relative">
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-2 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm hover:opacity-90"
                                  style={{backgroundColor: '#5D4037'}}
                                  aria-expanded={openBookingFor === serviceKey}
                                  onClick={() => setOpenBookingFor(openBookingFor === serviceKey ? null : serviceKey)}
                                >
                                  <span>Book Now</span>
                                  <ChevronDown className={`h-4 w-4 transition-transform ${openBookingFor === serviceKey ? 'rotate-180' : ''}`} />
                                </button>
                                {openBookingFor === serviceKey && (
                                  <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-lg shadow-lg border z-10 p-3" style={{borderColor: '#C4A484'}}>
                                    <div className="flex flex-col gap-2">
                                      <a href="https://sultanaspa.zenoti.com/webstoreNew/services" target="_blank" rel="noopener noreferrer" className="text-white font-medium py-2 px-3 rounded-full text-xs text-center hover:opacity-90" style={{backgroundColor: '#5D4037'}}>
                                        Book Online
                                      </a>
                                      <a href={`tel:${ALBARSHA_PHONE}`} className="text-white font-medium py-2 px-3 rounded-full text-xs text-center hover:opacity-90" style={{backgroundColor: '#5D4037'}}>
                                        Call
                                      </a>
                                      <a href={`https://wa.me/${ALBARSHA_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-full text-xs text-center">
                                        WhatsApp
                                      </a>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
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
                  href="https://maps.app.goo.gl/vrNKxkqEb7eG7tDGA" 
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
                    href={`tel:${ALBARSHA_PHONE}`}
                    className="flex-1 text-white font-medium py-2 px-3 rounded-full transition-colors duration-200 text-xs text-center hover:opacity-90"
                    style={{backgroundColor: '#5D4037'}}
                  >
                    Call
                  </a>
                  <a 
                    href={`https://wa.me/${ALBARSHA_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  href="https://maps.app.goo.gl/vrNKxkqEb7eG7tDGA"
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
                    href={`tel:${ALBARSHA_PHONE}`}
                    className="flex-1 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center hover:opacity-90 text-sm"
                    style={{backgroundColor: '#5D4037'}}
                  >
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${ALBARSHA_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
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
            <p className="text-lg" style={{color: '#A78A7F'}}>Real experiences from our valued guests - Google Reviews</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => {
              const reviewKey = `${review.name}-${index}`;
              const isExpanded = expandedReview === reviewKey;
              const previewLength = 200;
              const needsExpansion = review.text.length > previewLength;
              const displayText = isExpanded || !needsExpansion 
                ? review.text 
                : review.text.substring(0, previewLength) + "...";
              
              return (
                <div key={reviewKey} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow" style={{border: '1px solid #C4A484'}}>
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" style={{color: '#C4A484'}} />
                    ))}
                  </div>
                  <p className="italic mb-4 leading-relaxed whitespace-pre-line" style={{color: '#A78A7F'}}>&ldquo;{displayText}&rdquo;</p>
                  {needsExpansion && (
                    <button
                      onClick={() => setExpandedReview(isExpanded ? null : reviewKey)}
                      className="flex items-center gap-2 text-sm font-medium mb-4 transition-colors hover:opacity-80"
                      style={{color: '#5D4037'}}
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="h-4 w-4" />
                          Read Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4" />
                          Read More
                        </>
                      )}
                    </button>
                  )}
                  <div className="text-center">
                    <p className="font-medium" style={{color: '#5D4037'}}>{review.name}</p>
                    <p className="text-sm" style={{color: '#A78A7F'}}>{review.treatment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4" style={{background: 'linear-gradient(to right, #C4A484, #A78A7F)'}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-light mb-6">Ready to Experience Luxury?</h3>
          <p className="text-xl mb-8 opacity-90">Book your appointment today and discover why we're Dubai's premier spa destination</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://sultanaspa.zenoti.com/webstoreNew/services"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium py-4 px-8 rounded-full transition-colors duration-200 text-lg hover:opacity-90 inline-block text-center"
              style={{
                backgroundColor: 'white',
                color: '#5D4037'
              }}
            >
              Book Online
            </a>
            <div className="relative">
              <button
                type="button"
                className="border-2 border-white text-white font-medium py-4 px-8 rounded-full transition-colors duration-200 text-lg inline-flex items-center gap-2"
                style={{ borderColor: 'white' }}
                aria-expanded={openBookingFor === "cta-contact"}
                onClick={() => setOpenBookingFor(openBookingFor === "cta-contact" ? null : "cta-contact")}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'white';
                  (e.currentTarget as HTMLButtonElement).style.color = '#5D4037';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = 'white';
                }}
              >
                <span>Call / WhatsApp</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openBookingFor === "cta-contact" ? 'rotate-180' : ''}`} />
              </button>
              {openBookingFor === "cta-contact" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10 p-3" style={{borderColor: '#C4A484'}}>
                  <div className="flex flex-col gap-2">
                    <a href={`tel:${ALBARSHA_PHONE}`} className="text-white font-medium py-2 px-3 rounded-full text-sm text-center hover:opacity-90" style={{backgroundColor: '#5D4037'}}>
                      Call
                    </a>
                    <a href={`https://wa.me/${ALBARSHA_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-full text-sm text-center">
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Back to top - fixed bottom right when scrolled */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 py-3 px-4 rounded-full font-medium text-white shadow-lg transition-all hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: "#5D4037" }}
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
          <span>Back to top</span>
        </button>
      )}
    </>
  );
} 