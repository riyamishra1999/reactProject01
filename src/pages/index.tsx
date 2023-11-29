import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";
// @ts-ignore
import {loadSnippet, Message, MetaCardsDisplayFormat, MetaCardsIcons} from "chat-snippet-sdk";
const inter = Inter({ subsets: ["latin"] });

const dataObject = {
  style: {
    type: MetaCardsDisplayFormat.TABULAR,
    // accentColor: 'blue',
    // bgColor: '#ece6e6',
    // isCentered: false,
  },
  data: {
    actionName: 'Ticket Purchased',
    icon: MetaCardsIcons.TICKET,
    cardHeader: 'You successfully purchased a ticket.',
    cardDescription:
      'Ticket purchased for Rs.750 for consultation with Dr. Manoj ',
    buttonText: 'View Ticket',
    buttonUrl: '#',
    additionalInfo:
      'Dr. Subodh Bhusal has set a followup date. You can enjoy a free followup consultation until August 11, 2023',
    details: [
      {
        key: 'Advice/Rx',
        value:
          'advice done but needs followup sooner. The patient is seriously ill.',
      },
      {
        key: 'Consultation Summary',
        value:
          'prescribed from call but needs physical checkup of the painful areas. Needs physical consult',
      },
    ],
  },
};

const message: Message = {
  text: 'Hello Manoj!, How are you?',
  messageId: '123',
  imageUrl: 'https://godhindus.com/wp-content/uploads/2022/12/image-of-ram.jpg',
  // videoUrl:
  //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  timestamp: 1700631994934,
  syncId: '121ws',
  attachment: [],
  messagePosition: 'first',
};

const click = () => {
  console.log('I am called from click event by user.');
};
function longPress() {
  console.log('I am called from long press user.');
}
export default function Home() {
  return (
    <main className={inter.className}>
      <Sidebar />
        <div id={"message-snippet"}>
        </div>
    </main>
  );
}
