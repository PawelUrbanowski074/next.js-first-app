import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Wawel_hill_%28view_from_W-winter%29%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg/1024px-Wawel_hill_%28view_from_W-winter%29%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg"
      title="A first meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        }
      },
      {
        params: {
          meetupId: 'm2',
        }
      }
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId; 

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Wawel_hill_%28view_from_W-winter%29%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg/1024px-Wawel_hill_%28view_from_W-winter%29%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg",
        id: meetupId,
        title: "A first meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  }
}

export default MeetupDetails;