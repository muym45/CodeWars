function countGrade(scores) {
    // Initialize the grade distribution object with initial counts
    const gradeDistribution = {
      S: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      X: 0,
    };
  
    // Iterate through the scores and update the grade distribution
    scores.forEach(score => {
      if (score === 100) {
        gradeDistribution.S++;
      } else if (score < 100 && score >= 90) {
        gradeDistribution.A++;
      } else if (score < 90 && score >= 80) {
        gradeDistribution.B++;
      } else if (score < 80 && score >= 60) {
        gradeDistribution.C++;
      } else if (score < 60 && score >= 0) {
        gradeDistribution.D++;
      } else if (score === -1) {
        gradeDistribution.X++;
      }
    });
  
    return gradeDistribution;
  }
  