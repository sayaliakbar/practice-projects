export default function SocialMediaIcon({ iconName }) {
  return (
    <div className="w-10 h-10 rounded-full border border-white p-2 text-center">
      <p className="paragraph-label">{iconName}</p>
    </div>
  );
}
