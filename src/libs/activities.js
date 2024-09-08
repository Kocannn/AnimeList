export function groupActivitiesByDate(activities){
  const activityCountMap = {};

  activities.forEach(activity => {
    const date = activity.createdAt.toISOString().split('T')[0];
    activityCountMap[date] = (activityCountMap[date] || 0) + 1;
  })

  return activityCountMap;
}

export function generateRangeDay(days){
  const dates = [];
  const today = new Date();
   for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates
}

export function createGridData(dataRange, activityCountMap){
 return dataRange.map(date => {
  const count = activityCountMap[date] || 0;
  return {
    date,
    count
  }
 })
}

export const getColor = (count) => {
  if (count === 0) return '#ebedf0'; 
  else if (count >= 1 && count < 3) return '#b3cde0'; 
  else if (count >= 3 && count < 5) return '#6497b1'; 
  else if (count >= 5 && count < 10) return '#1f77b4'; 
  else return '#004b49'; 
}

