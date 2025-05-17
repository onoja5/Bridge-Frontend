export type ProgressStatsRsp = {
  progress: {};
  completionStats: {
    tasksCompleted: number;
    projectsCompleted: number;
    year1MilestonesCompleted: number;
    year2MilestonesCompleted: number;
    year3MilestonesCompleted: number;
    year4MilestonesCompleted: number;
    year5MilestonesCompleted: number;
  };
};
