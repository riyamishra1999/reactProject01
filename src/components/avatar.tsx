import Image from "next/image";

export default function avatar() {
  return (
    <Image
      src={
        "https://scontent.cdninstagram.com/v/t51.2885-19/401217521_1733058813884653_1075983108467016962_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=eyGcQUDkmI8AX_YxNNn&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBt_2n7uaYDlZy7s5_lf17Y9IV0itIULUf0-HBVRv8TKw&oe=655F22EC&_nc_sid=10d13b"
      }
      height={100}
      width={100}
      alt="profile-user"
      className="rounded-full object-cover h-6 w-6 group-hover:scale-105"
    />
  );
}
