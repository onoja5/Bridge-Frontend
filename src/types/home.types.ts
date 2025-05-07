export type ProgressStatsRsp = {
  progress: {};
  completionStats: {
    tasksCompleted: number;
    projectsCompleted: number;
    year1MilestonesCompleted: number;
    year3MilestonesCompleted: number;
    year5MilestonesCompleted: number;
  };
};
