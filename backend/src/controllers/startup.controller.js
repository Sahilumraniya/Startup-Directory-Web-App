import { Startup } from "../models/startup.model.js";

const getAllStartups = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, filter, search } = req.query;

    // Convert page and pageSize to numbers
    const pageNumber = parseInt(page, 10);
    const limit = parseInt(pageSize, 10);

    // Reset pageSize to its default value when a new search is performed
    const effectivePageSize = search ? 10 : limit;

    // Calculate skip value for pagination
    const skip = (pageNumber - 1) * effectivePageSize;
    let startups = null;
    let collectionLength = 0;

    if (search && search.trim() !== "") {
      const searchQuery = search.toLowerCase();
      let query = {
        StartupName: { $regex: new RegExp(searchQuery, "i") },
      };

      // Add filter condition if provided
      if (filter && filter !== "All") {
        query.IndustryVertical = filter;
      }

      const matchingStartups = await Startup.find(query)
        .skip(skip)
        .limit(effectivePageSize);

      collectionLength = await Startup.countDocuments(query);

      res.json({
        success: true,
        data: matchingStartups,
        totalStartup: Math.ceil(collectionLength / effectivePageSize),
      });
      return;
    }

    // Retrieve startups with pagination
    let query = {};

    // Add filter condition if provided
    if (filter && filter !== "All" && filter !== "none") {
      query.IndustryVertical = filter;
    } else if (filter == "none") {
      query.IndustryVertical = null;
    }

    if (search && search.trim() !== "") {
      query.StartupName = { $regex: new RegExp(search, "i") };
    }

    console.log(query);

    startups = await Startup.find(query).skip(skip).limit(effectivePageSize);
    collectionLength = await Startup.countDocuments(query);

    // Send the response
    res.json({
      success: true,
      data: startups,
      totalStartup: Math.ceil(collectionLength / effectivePageSize),
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
    let uniqueIndustry = await Startup.distinct("IndustryVertical");
    uniqueIndustry = uniqueIndustry.map((ind) => {
      if (ind == null) {
        return "none";
      } else {
        return ind;
      }
    });
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
    //console.log(req.body);
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
