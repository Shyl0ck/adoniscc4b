"use strict";

const Job = use("App/Models/Job");

class JobController {
  async home({ view }) {
    // Fetch a job
    const jobs = await Job.all();

    return view.render("index", { jobs: jobs.toJSON() });
  }
}

module.exports = JobController;
