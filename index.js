
  function  superbowlWin (records) {
    let foundWinning = records.find(record => record.result === 'W')
if (foundWinning){
  return foundWinning.year
} 
  
}