// module.exports = {
//     format_time: (date) => {
//       return date.toLocaleTimeString();
//     },
//     format_date: (date) => {
//       return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
//         new Date(date).getFullYear() + 5
//       }`;
//     },
//   };
  
  const moment = require('moment');

module.exports = {
  // Helper function to format date using moment.js library
  format_date: (date) => {
    return moment(date).format('MMM DD, YYYY [at] hh:mm A');
  },

  // Helper function to check if two values are equal
  // This is useful for checking the user's ID against the post's user_id
  // to show the edit/delete buttons
  eq: (value1, value2) => {
    return value1 === value2;
  },

  // Helper function to check if a post is owned by the current user
  owned: (postUserId, currentUserId) => {
    return postUserId === currentUserId;
  }
};
