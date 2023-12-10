import { Startup } from "../models/startup.model.js";

const getAllStartups = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, filter } = req.query;
    console.log("filter", filter);

    // Convert page and pageSize to numbers
    const pageNumber = parseInt(page, 10);
    const limit = parseInt(pageSize, 10);

    // Calculate skip value for pagination
    const skip = (pageNumber - 1) * limit;
    let startups = null;
    let collectionLength = 0;

    // Retrieve startups with pagination
    if (filter == null || filter == undefined) {
      startups = await Startup.find().skip(skip).limit(limit);
      collectionLength = await Startup.countDocuments();
    } else {
      startups = await Startup.find({ IndustryVertical: filter })
        .skip(skip)
        .limit(limit);
      collectionLength = await Startup.countDocuments({
        IndustryVertical: filter,
      });
    }

    // Send the response
    res.json({
      success: true,
      data: startups,
      totalStartup: collectionLength,
    });
  } catch (error) {
    console.error("Error getting startups:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

const getuniqueIndustry = async (req, res) => {
  try {
    const uniqueIndustry = await Startup.distinct("IndustryVertical");
    res.json({
      success: true,
      data: uniqueIndustry,
    });
  } catch (error) {
    console.error("Error getting startups:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

const addStartup = async (req, res) => {
  try {
    const startup = await Startup.create(req.body);
    res.json({
      success: true,
      data: startup,
    });
  } catch (error) {
    console.error("Error getting startups:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

export { getAllStartups, getuniqueIndustry, addStartup };
