export default function FormatDate(dateString) {
    const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
  
    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${month} ${day.toString().padStart(2, '0')}, ${year}`;
  }
  
  // Example usage
  const formattedDate = FormatDate("2012-03-22");
  console.log(formattedDate); // Output: March 22, 2012
  