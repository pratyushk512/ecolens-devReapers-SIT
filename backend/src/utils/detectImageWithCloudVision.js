//import { GoogleGenerativeAI } from "@google/generative-ai";
import vision from "@google-cloud/vision"
export default async function detectImagewithGoogleCloudVision(image) {
    
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // const fileName1 = "./testImage1.jpg";
    // const images = [fileName1];
  
    const images = [image.url];
    let count = 0;
    let detectedText = [],
      detectedLogos = [],
      detectedLabels = [];
    while (count >= 0) {
      const [logoResults] = await client.logoDetection(images[count]);
      const [labelResults] = await client.labelDetection(images[count]);
      const [textResults] = await client.textDetection(images[count]);
  
      const detections = textResults.textAnnotations;
      detections.forEach((text) => {
        detectedText.push(text.description);
      });
  
      const logos = logoResults.logoAnnotations;
      logos.forEach((logo) => {
        detectedLogos.push(logo);
      });
  
      const labels = labelResults.labelAnnotations;
      labels.forEach((label) => {
        detectedLabels.push(label.description);
      });
  
      count--;
    }
  
    const data={"Cardboard":{"carbonFootprint":"0.8 kg CO2e/kg","waterUsage":"1,300 liters/kg","recyclable":true,"renewable":false},"Wood":{"carbonFootprint":"1.5 kg CO2e/kg","waterUsage":"1,500 liters/kg","recyclable":true,"renewable":true},"Soy":{"carbonFootprint":"3.0 kg CO2e/kg","waterUsage":"2,200 liters/kg","recyclable":true,"renewable":true},"Beef":{"carbonFootprint":"30.0 kg CO2e/kg","waterUsage":"15,000 liters/kg","recyclable":false,"renewable":false},"Chicken":{"carbonFootprint":"6.0 kg CO2e/kg","waterUsage":"4,000 liters/kg","recyclable":false,"renewable":false},"Rubber":{"carbonFootprint":"2.0 kg CO2e/kg","waterUsage":"3,000 liters/kg","recyclable":true,"renewable":false},"Steel":{"carbonFootprint":"2.0 kg CO2e/kg","waterUsage":"1,800 liters/kg","recyclable":true,"renewable":false},"Copper":{"carbonFootprint":"5.0 kg CO2e/kg","waterUsage":"1,500 liters/kg","recyclable":true,"renewable":false},"Gold":{"carbonFootprint":"8.0 kg CO2e/kg","waterUsage":"10,000 liters/kg","recyclable":true,"renewable":false},"Bamboo":{"carbonFootprint":"0.5 kg CO2e/kg","waterUsage":"500 liters/kg","recyclable":true,"renewable":true},"Smartphone":{"carbonFootprint":"55.0 kg CO2e/unit","waterUsage":"900 liters/unit","recyclable":true,"renewable":false},"Laptop":{"carbonFootprint":"300.0 kg CO2e/unit","waterUsage":"1,500 liters/unit","recyclable":true,"renewable":false},"Textile":{"carbonFootprint":"5.0 kg CO2e/kg","waterUsage":"8,000 liters/kg","recyclable":true,"renewable":false},"Fiberglass":{"carbonFootprint":"2.0 kg CO2e/kg","waterUsage":"2,000 liters/kg","recyclable":true,"renewable":false},"Styrofoam":{"carbonFootprint":"2.5 kg CO2e/kg","waterUsage":"500 liters/kg","recyclable":false,"renewable":false},"Teflon":{"carbonFootprint":"5.0 kg CO2e/kg","waterUsage":"1,000 liters/kg","recyclable":false,"renewable":false},"Vinyl":{"carbonFootprint":"3.0 kg CO2e/kg","waterUsage":"700 liters/kg","recyclable":true,"renewable":false},"PVC":{"carbonFootprint":"5.0 kg CO2e/kg","waterUsage":"1,500 liters/kg","recyclable":true,"renewable":false},"Nylon":{"carbonFootprint":"6.0 kg CO2e/kg","waterUsage":"2,000 liters/kg","recyclable":true,"renewable":false},"Plastic":{"carbonFootprint":"6.0 kg CO2e/kg","waterUsage":"1,200 liters/kg","recyclable":true,"renewable":false},"Glass":{"carbonFootprint":"1.0 kg CO2e/kg","waterUsage":"500 liters/kg","recyclable":true,"renewable":false},"Aluminum":{"carbonFootprint":"7.0 kg CO2e/kg","waterUsage":"500 liters/kg","recyclable":true,"renewable":false},"Paper":{"carbonFootprint":"1.0 kg CO2e/kg","waterUsage":"1,200 liters/kg","recyclable":true,"renewable":true},"Cotton":{"carbonFootprint":"2.5 kg CO2e/kg","waterUsage":"10,000 liters/kg","recyclable":true,"renewable":true},"Wheat":{"carbonFootprint":"0.5 kg CO2e/kg","waterUsage":"1,800 liters/kg","recyclable":true,"renewable":true},"Rice":{"carbonFootprint":"4.0 kg CO2e/kg","waterUsage":"3,000 liters/kg","recyclable":true,"renewable":true},"Copper Wire":{"carbonFootprint":"3.5 kg CO2e/kg","waterUsage":"1,000 liters/kg","recyclable":true,"renewable":false},"Aluminum Wire":{"carbonFootprint":"4.0 kg CO2e/kg","waterUsage":"1,200 liters/kg","recyclable":true,"renewable":false},"Silicon":{"carbonFootprint":"9.0 kg CO2e/kg","waterUsage":"2,000 liters/kg","recyclable":true,"renewable":false},"LED":{"carbonFootprint":"10.0 kg CO2e/unit","waterUsage":"1,500 liters/unit","recyclable":true,"renewable":false},"Smartphone Battery":{"carbonFootprint":"50.0 kg CO2e/unit","waterUsage":"1,000 liters/unit","recyclable":true,"renewable":false},"Smartphone Display":{"carbonFootprint":"20.0 kg CO2e/unit","waterUsage":"500 liters/unit","recyclable":true,"renewable":false},"Laptop Battery":{"carbonFootprint":"100.0 kg CO2e/unit","waterUsage":"2,000 liters/unit","recyclable":true,"renewable":false},"Laptop Screen":{"carbonFootprint":"30.0 kg CO2e/unit","waterUsage":"800 liters/unit","recyclable":true,"renewable":false},"Television":{"carbonFootprint":"150.0 kg CO2e/unit","waterUsage":"3,000 liters/unit","recyclable":true,"renewable":false},"Washing Machine":{"carbonFootprint":"200.0 kg CO2e/unit","waterUsage":"5,000 liters/unit","recyclable":true,"renewable":false},"Microwave":{"carbonFootprint":"90.0 kg CO2e/unit","waterUsage":"2,500 liters/unit","recyclable":true,"renewable":false},"Refrigerator":{"carbonFootprint":"300.0 kg CO2e/unit","waterUsage":"6,000 liters/unit","recyclable":true,"renewable":false},"Wires (PVC-coated)":{"carbonFootprint":"6.0 kg CO2e/kg","waterUsage":"1,500 liters/kg","recyclable":true,"renewable":false},"Batteries (Lithium-ion)":{"carbonFootprint":"120.0 kg CO2e/unit","waterUsage":"2,500 liters/unit","recyclable":true,"renewable":false},"Plastic Packaging":{"carbonFootprint":"5.0 kg CO2e/kg","waterUsage":"1,500 liters/kg","recyclable":true,"renewable":false},"Cardboard Packaging":{"carbonFootprint":"0.8 kg CO2e/kg","waterUsage":"1,000 liters/kg","recyclable":true,"renewable":true},"Paper Packaging":{"carbonFootprint":"1.0 kg CO2e/kg","waterUsage":"1,200 liters/kg","recyclable":true,"renewable":true},"Styrofoam Packaging":{"carbonFootprint":"2.5 kg CO2e/kg","waterUsage":"500 liters/kg","recyclable":false,"renewable":false},"Metal Cans":{"carbonFootprint":"3.0 kg CO2e/kg","waterUsage":"1,500 liters/kg","recyclable":true,"renewable":false},"Glass Packaging":{"carbonFootprint":"1.0 kg CO2e/kg","waterUsage":"500 liters/kg","recyclable":true,"renewable":false},"Wood Furniture":{"carbonFootprint":"10.0 kg CO2e/kg","waterUsage":"1,500 liters/kg","recyclable":true,"renewable":true},"Plastic Furniture":{"carbonFootprint":"15.0 kg CO2e/kg","waterUsage":"2,000 liters/kg","recyclable":true,"renewable":false},"Leather Furniture":{"carbonFootprint":"30.0 kg CO2e/kg","waterUsage":"2,500 liters/kg","recyclable":true,"renewable":false},"Fabric Furniture (Cotton)":{"carbonFootprint":"5.0 kg CO2e/kg","waterUsage":"8,000 liters/kg","recyclable":true,"renewable":true},"Sofa Cushions":{"carbonFootprint":"25.0 kg CO2e/unit","waterUsage":"3,000 liters/unit","recyclable":true,"renewable":false},"Wooden Chairs":{"carbonFootprint":"12.0 kg CO2e/unit","waterUsage":"1,200 liters/unit","recyclable":true,"renewable":true},"Metal Chairs":{"carbonFootprint":"18.0 kg CO2e/unit","waterUsage":"1,800 liters/unit","recyclable":true,"renewable":false},"Plastic Chairs":{"carbonFootprint":"22.0 kg CO2e/unit","waterUsage":"2,500 liters/unit","recyclable":true,"renewable":false},"Fabric Chairs (Cotton)":{"carbonFootprint":"10.0 kg CO2e/unit","waterUsage":"5,000 liters/unit","recyclable":true,"renewable":true},"Glass Table":{"carbonFootprint":"35.0 kg CO2e/unit","waterUsage":"1,000 liters/unit","recyclable":true,"renewable":false},"Plastic Table":{"carbonFootprint":"40.0 kg CO2e/unit","waterUsage":"3,000 liters/unit","recyclable":true,"renewable":false},"Wooden Table":{"carbonFootprint":"20.0 kg CO2e/unit","waterUsage":"2,000 liters/unit","recyclable":true,"renewable":true},"Metal Table":{"carbonFootprint":"30.0 kg CO2e/unit","waterUsage":"2,500 liters/unit","recyclable":true,"renewable":false},"Textile Packaging":{"carbonFootprint":"2.0 kg CO2e/kg","waterUsage":"2,500 liters/kg","recyclable":true,"renewable":false},"Cotton Bags":{"carbonFootprint":"3.0 kg CO2e/kg","waterUsage":"4,000 liters/kg","recyclable":true,"renewable":true},"Jute Bags":{"carbonFootprint":"1.0 kg CO2e/kg","waterUsage":"1,200 liters/kg","recyclable":true,"renewable":true},"Canvas Bags":{"carbonFootprint":"5.0 kg CO2e/kg","waterUsage":"3,000 liters/kg","recyclable":true,"renewable":true},"PET Plastic Bottles":{"carbonFootprint":"4.0 kg CO2e/unit","waterUsage":"1,000 liters/unit","recyclable":true,"renewable":false},"Aluminum Cans":{"carbonFootprint":"3.5 kg CO2e/unit","waterUsage":"1,200 liters/unit","recyclable":true,"renewable":false},"Tablet":{"carbonFootprint":"70.0 kg CO2e/unit","waterUsage":"1,800 liters/unit","recyclable":true,"renewable":false},"Smartwatch":{"carbonFootprint":"20.0 kg CO2e/unit","waterUsage":"600 liters/unit","recyclable":true,"renewable":false},"Desktop Computer":{"carbonFootprint":"150.0 kg CO2e/unit","waterUsage":"4,000 liters/unit","recyclable":true,"renewable":false},"Portable Speaker":{"carbonFootprint":"30.0 kg CO2e/unit","waterUsage":"700 liters/unit","recyclable":true,"renewable":false},"Headphones":{"carbonFootprint":"10.0 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":false},"Power Bank":{"carbonFootprint":"20.0 kg CO2e/unit","waterUsage":"500 liters/unit","recyclable":true,"renewable":false},"Electric Toothbrush":{"carbonFootprint":"5.0 kg CO2e/unit","waterUsage":"100 liters/unit","recyclable":true,"renewable":false},"Office Chair":{"carbonFootprint":"25.0 kg CO2e/unit","waterUsage":"800 liters/unit","recyclable":true,"renewable":false},"Wooden Desk":{"carbonFootprint":"50.0 kg CO2e/unit","waterUsage":"1,500 liters/unit","recyclable":true,"renewable":true},"Wooden Bookshelf":{"carbonFootprint":"40.0 kg CO2e/unit","waterUsage":"1,200 liters/unit","recyclable":true,"renewable":true},"Metal Filing Cabinet":{"carbonFootprint":"60.0 kg CO2e/unit","waterUsage":"2,000 liters/unit","recyclable":true,"renewable":false},"Recliner Chair":{"carbonFootprint":"90.0 kg CO2e/unit","waterUsage":"1,800 liters/unit","recyclable":true,"renewable":false},"Dining Table":{"carbonFootprint":"120.0 kg CO2e/unit","waterUsage":"2,500 liters/unit","recyclable":true,"renewable":true},"Cushion":{"carbonFootprint":"15.0 kg CO2e/unit","waterUsage":"1,200 liters/unit","recyclable":true,"renewable":false},"Bean Bag":{"carbonFootprint":"25.0 kg CO2e/unit","waterUsage":"2,000 liters/unit","recyclable":true,"renewable":false},"Bubble Wrap":{"carbonFootprint":"3.0 kg CO2e/kg","waterUsage":"1,200 liters/kg","recyclable":false,"renewable":false},"Plastic Wrap":{"carbonFootprint":"4.0 kg CO2e/kg","waterUsage":"1,000 liters/kg","recyclable":false,"renewable":false},"Shrink Wrap":{"carbonFootprint":"2.5 kg CO2e/kg","waterUsage":"1,100 liters/kg","recyclable":false,"renewable":false},"Aluminum Foil":{"carbonFootprint":"2.0 kg CO2e/kg","waterUsage":"800 liters/kg","recyclable":true,"renewable":false},"Glass Bottles":{"carbonFootprint":"1.5 kg CO2e/unit","waterUsage":"1,000 liters/unit","recyclable":true,"renewable":false},"Tetra Pak Cartons":{"carbonFootprint":"2.5 kg CO2e/unit","waterUsage":"1,200 liters/unit","recyclable":true,"renewable":false},"Plastic Bags":{"carbonFootprint":"5.0 kg CO2e/unit","waterUsage":"1,500 liters/unit","recyclable":true,"renewable":false},"Paper Bags":{"carbonFootprint":"1.0 kg CO2e/unit","waterUsage":"500 liters/unit","recyclable":true,"renewable":true},"Wooden Packaging":{"carbonFootprint":"4.0 kg CO2e/unit","waterUsage":"1,800 liters/unit","recyclable":true,"renewable":true},"Toothpaste Tube":{"carbonFootprint":"2.0 kg CO2e/unit","waterUsage":"100 liters/unit","recyclable":true,"renewable":false},"Shampoo Bottle":{"carbonFootprint":"1.5 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":false},"Cleaning Spray Bottle":{"carbonFootprint":"2.5 kg CO2e/unit","waterUsage":"300 liters/unit","recyclable":true,"renewable":false},"Dishwasher Detergent":{"carbonFootprint":"1.0 kg CO2e/unit","waterUsage":"150 liters/unit","recyclable":true,"renewable":false},"Cotton Towels":{"carbonFootprint":"5.0 kg CO2e/unit","waterUsage":"4,500 liters/unit","recyclable":true,"renewable":true},"Rubber Gloves":{"carbonFootprint":"3.0 kg CO2e/unit","waterUsage":"500 liters/unit","recyclable":true,"renewable":false},"Broom":{"carbonFootprint":"2.0 kg CO2e/unit","waterUsage":"100 liters/unit","recyclable":false,"renewable":false},"Trash Bag":{"carbonFootprint":"3.0 kg CO2e/unit","waterUsage":"500 liters/unit","recyclable":true,"renewable":false},"Car Tire":{"carbonFootprint":"200.0 kg CO2e/unit","waterUsage":"3,000 liters/unit","recyclable":true,"renewable":false},"Car Battery":{"carbonFootprint":"100.0 kg CO2e/unit","waterUsage":"2,500 liters/unit","recyclable":true,"renewable":false},"Windshield Glass":{"carbonFootprint":"15.0 kg CO2e/unit","waterUsage":"500 liters/unit","recyclable":true,"renewable":false},"Plastic Car Parts":{"carbonFootprint":"50.0 kg CO2e/unit","waterUsage":"1,200 liters/unit","recyclable":true,"renewable":false},"Leather Seats":{"carbonFootprint":"80.0 kg CO2e/unit","waterUsage":"1,500 liters/unit","recyclable":true,"renewable":false},"Brick":{"carbonFootprint":"500.0 kg CO2e/ton","waterUsage":"1,000 liters/ton","recyclable":false,"renewable":false},"Wood (Pine)":{"carbonFootprint":"200.0 kg CO2e/ton","waterUsage":"5,000 liters/ton","recyclable":true,"renewable":true},"Glass (Building)":{"carbonFootprint":"300.0 kg CO2e/ton","waterUsage":"800 liters/ton","recyclable":true,"renewable":false},"Canned Soup":{"carbonFootprint":"0.8 kg CO2e/unit","waterUsage":"100 liters/unit","recyclable":true,"renewable":false},"Canned Tuna":{"carbonFootprint":"1.2 kg CO2e/unit","waterUsage":"120 liters/unit","recyclable":true,"renewable":false},"Frozen Vegetables":{"carbonFootprint":"1.0 kg CO2e/unit","waterUsage":"150 liters/unit","recyclable":true,"renewable":false},"Almond Milk":{"carbonFootprint":"1.5 kg CO2e/unit","waterUsage":"250 liters/unit","recyclable":true,"renewable":false},"Peanut Butter":{"carbonFootprint":"1.2 kg CO2e/unit","waterUsage":"300 liters/unit","recyclable":true,"renewable":false},"Chips Bag":{"carbonFootprint":"0.6 kg CO2e/unit","waterUsage":"80 liters/unit","recyclable":true,"renewable":false},"Energy Drink":{"carbonFootprint":"0.9 kg CO2e/unit","waterUsage":"120 liters/unit","recyclable":true,"renewable":false},"Toilet Paper":{"carbonFootprint":"1.0 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":true},"Tissues":{"carbonFootprint":"1.5 kg CO2e/unit","waterUsage":"250 liters/unit","recyclable":true,"renewable":true},"Paper Towels":{"carbonFootprint":"1.2 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":true},"Cleaning Wipes":{"carbonFootprint":"2.0 kg CO2e/unit","waterUsage":"500 liters/unit","recyclable":false,"renewable":false},"Plastic Trash Can":{"carbonFootprint":"3.0 kg CO2e/unit","waterUsage":"1,000 liters/unit","recyclable":true,"renewable":false},"Laundry Detergent Bottle":{"carbonFootprint":"1.3 kg CO2e/unit","waterUsage":"300 liters/unit","recyclable":true,"renewable":false},"Fabric Softener Bottle":{"carbonFootprint":"1.2 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":false},"Juice Box":{"carbonFootprint":"1.2 kg CO2e/unit","waterUsage":"400 liters/unit","recyclable":true,"renewable":false},"Wine Bottle":{"carbonFootprint":"3.0 kg CO2e/unit","waterUsage":"500 liters/unit","recyclable":true,"renewable":false},"Plastic Cup":{"carbonFootprint":"0.2 kg CO2e/unit","waterUsage":"50 liters/unit","recyclable":true,"renewable":false},"Plastic Straw":{"carbonFootprint":"0.1 kg CO2e/unit","waterUsage":"20 liters/unit","recyclable":false,"renewable":false},"Cereal Box":{"carbonFootprint":"0.4 kg CO2e/unit","waterUsage":"100 liters/unit","recyclable":true,"renewable":true},"Printer Paper":{"carbonFootprint":"0.5 kg CO2e/unit","waterUsage":"50 liters/unit","recyclable":true,"renewable":true},"Envelopes":{"carbonFootprint":"0.2 kg CO2e/unit","waterUsage":"20 liters/unit","recyclable":true,"renewable":true},"Cardboard Box":{"carbonFootprint":"0.3 kg CO2e/unit","waterUsage":"40 liters/unit","recyclable":true,"renewable":true},"Sticky Notes":{"carbonFootprint":"0.6 kg CO2e/unit","waterUsage":"80 liters/unit","recyclable":true,"renewable":false},"Plastic Folder":{"carbonFootprint":"0.8 kg CO2e/unit","waterUsage":"100 liters/unit","recyclable":true,"renewable":false},"Shaving Razor":{"carbonFootprint":"0.5 kg CO2e/unit","waterUsage":"50 liters/unit","recyclable":true,"renewable":false},"Conditioner Bottle":{"carbonFootprint":"1.2 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":false},"Toothbrush":{"carbonFootprint":"0.2 kg CO2e/unit","waterUsage":"30 liters/unit","recyclable":true,"renewable":false},"Bar Soap":{"carbonFootprint":"0.4 kg CO2e/unit","waterUsage":"60 liters/unit","recyclable":true,"renewable":false},"Deodorant Stick":{"carbonFootprint":"0.7 kg CO2e/unit","waterUsage":"80 liters/unit","recyclable":true,"renewable":false},"Smartphone Case":{"carbonFootprint":"2.0 kg CO2e/unit","waterUsage":"250 liters/unit","recyclable":true,"renewable":false},"Laptop Charger":{"carbonFootprint":"3.0 kg CO2e/unit","waterUsage":"400 liters/unit","recyclable":true,"renewable":false},"Wireless Mouse":{"carbonFootprint":"0.8 kg CO2e/unit","waterUsage":"100 liters/unit","recyclable":true,"renewable":false},"Smart Speaker":{"carbonFootprint":"2.5 kg CO2e/unit","waterUsage":"300 liters/unit","recyclable":true,"renewable":false},"Vacuum Cleaner":{"carbonFootprint":"60.0 kg CO2e/unit","waterUsage":"1,000 liters/unit","recyclable":true,"renewable":false},"Electric Kettle":{"carbonFootprint":"30.0 kg CO2e/unit","waterUsage":"600 liters/unit","recyclable":true,"renewable":false},"Bamboo Toothbrush":{"carbonFootprint":"0.3 kg CO2e/unit","waterUsage":"20 liters/unit","recyclable":true,"renewable":true},"Cotton T-shirt":{"carbonFootprint":"5.0 kg CO2e/unit","waterUsage":"2,700 liters/unit","recyclable":true,"renewable":true},"Cotton Jeans":{"carbonFootprint":"7.0 kg CO2e/unit","waterUsage":"5,000 liters/unit","recyclable":true,"renewable":true},"Wool Sweater":{"carbonFootprint":"8.0 kg CO2e/unit","waterUsage":"1,200 liters/unit","recyclable":true,"renewable":true},"Leather Belt":{"carbonFootprint":"10.0 kg CO2e/unit","waterUsage":"1,000 liters/unit","recyclable":true,"renewable":false},"Plastic Sunglasses":{"carbonFootprint":"2.5 kg CO2e/unit","waterUsage":"300 liters/unit","recyclable":true,"renewable":false},"Rubber Boots":{"carbonFootprint":"15.0 kg CO2e/unit","waterUsage":"1,500 liters/unit","recyclable":false,"renewable":false},"Canned Beans":{"carbonFootprint":"1.0 kg CO2e/unit","waterUsage":"120 liters/unit","recyclable":true,"renewable":false},"Rice (Packaged)":{"carbonFootprint":"0.6 kg CO2e/unit","waterUsage":"1,500 liters/unit","recyclable":true,"renewable":false},"Chocolate Bar":{"carbonFootprint":"1.1 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":false},"Instant Noodles":{"carbonFootprint":"0.8 kg CO2e/unit","waterUsage":"150 liters/unit","recyclable":true,"renewable":false},"Tea Bags":{"carbonFootprint":"0.5 kg CO2e/unit","waterUsage":"50 liters/unit","recyclable":true,"renewable":false},"Coffee Pack":{"carbonFootprint":"0.9 kg CO2e/unit","waterUsage":"180 liters/unit","recyclable":true,"renewable":false},"Frozen Pizza":{"carbonFootprint":"1.5 kg CO2e/unit","waterUsage":"250 liters/unit","recyclable":true,"renewable":false},"Dish Soap":{"carbonFootprint":"0.7 kg CO2e/unit","waterUsage":"100 liters/unit","recyclable":true,"renewable":false},"Glass Cleaner":{"carbonFootprint":"0.6 kg CO2e/unit","waterUsage":"80 liters/unit","recyclable":true,"renewable":false},"Trash Bags (Plastic)":{"carbonFootprint":"0.5 kg CO2e/unit","waterUsage":"100 liters/unit","recyclable":false,"renewable":false},"Mop":{"carbonFootprint":"2.0 kg CO2e/unit","waterUsage":"300 liters/unit","recyclable":true,"renewable":false},"Scrub Brush":{"carbonFootprint":"0.4 kg CO2e/unit","waterUsage":"50 liters/unit","recyclable":true,"renewable":false},"Milk Carton":{"carbonFootprint":"0.7 kg CO2e/unit","waterUsage":"150 liters/unit","recyclable":true,"renewable":false},"Beer Bottle":{"carbonFootprint":"2.5 kg CO2e/unit","waterUsage":"300 liters/unit","recyclable":true,"renewable":false},"Tetra Pak Juice Carton":{"carbonFootprint":"1.3 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":false},"Frozen Fruit":{"carbonFootprint":"1.2 kg CO2e/unit","waterUsage":"250 liters/unit","recyclable":true,"renewable":false},"Olive Oil Bottle":{"carbonFootprint":"1.8 kg CO2e/unit","waterUsage":"300 liters/unit","recyclable":true,"renewable":false},"Fruit Snacks":{"carbonFootprint":"0.5 kg CO2e/unit","waterUsage":"80 liters/unit","recyclable":true,"renewable":false},"Notepad":{"carbonFootprint":"0.6 kg CO2e/unit","waterUsage":"50 liters/unit","recyclable":true,"renewable":true},"Whiteboard Marker":{"carbonFootprint":"0.3 kg CO2e/unit","waterUsage":"30 liters/unit","recyclable":true,"renewable":false},"File Folders":{"carbonFootprint":"0.8 kg CO2e/unit","waterUsage":"70 liters/unit","recyclable":true,"renewable":false},"Stapler":{"carbonFootprint":"1.5 kg CO2e/unit","waterUsage":"150 liters/unit","recyclable":true,"renewable":false},"Lip Balm":{"carbonFootprint":"0.2 kg CO2e/unit","waterUsage":"20 liters/unit","recyclable":true,"renewable":false},"Shaving Foam":{"carbonFootprint":"0.8 kg CO2e/unit","waterUsage":"100 liters/unit","recyclable":true,"renewable":false},"Hand Sanitizer":{"carbonFootprint":"0.4 kg CO2e/unit","waterUsage":"60 liters/unit","recyclable":true,"renewable":false},"Nail Polish":{"carbonFootprint":"0.5 kg CO2e/unit","waterUsage":"80 liters/unit","recyclable":true,"renewable":false},"Bluetooth Headphones":{"carbonFootprint":"30.0 kg CO2e/unit","waterUsage":"400 liters/unit","recyclable":true,"renewable":false},"Laptop Bag":{"carbonFootprint":"2.5 kg CO2e/unit","waterUsage":"150 liters/unit","recyclable":true,"renewable":false},"Portable Charger":{"carbonFootprint":"10.0 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":false},"LED Light Bulb":{"carbonFootprint":"0.5 kg CO2e/unit","waterUsage":"50 liters/unit","recyclable":true,"renewable":false},"Wooden Chair":{"carbonFootprint":"8.0 kg CO2e/unit","waterUsage":"300 liters/unit","recyclable":true,"renewable":false},"Steel Desk":{"carbonFootprint":"20.0 kg CO2e/unit","waterUsage":"500 liters/unit","recyclable":true,"renewable":false},"Fabric Sofa":{"carbonFootprint":"12.0 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":false},"Plastic Storage Box":{"carbonFootprint":"4.0 kg CO2e/unit","waterUsage":"150 liters/unit","recyclable":true,"renewable":false},"Pet Food Bag":{"carbonFootprint":"0.5 kg CO2e/unit","waterUsage":"80 liters/unit","recyclable":true,"renewable":false},"Tennis Ball":{"carbonFootprint":"0.7 kg CO2e/unit","waterUsage":"50 liters/unit","recyclable":false,"renewable":false},"Bicycle Tire":{"carbonFootprint":"5.0 kg CO2e/unit","waterUsage":"200 liters/unit","recyclable":true,"renewable":false},"Plastic Cutlery":{"carbonFootprint":"0.3 kg CO2e/unit","waterUsage":"30 liters/unit","recyclable":false,"renewable":false}}

    let ans = [];
    detectedLabels.forEach((label) => {
  if (data[label]) {
    ans.push(data[label]);
  }
});
console.log(ans)
    return ans;
  }
  
  