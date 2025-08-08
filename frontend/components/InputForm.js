import { useState } from 'react';
import { useRouter } from 'next/router';

export default function InputForm() {
  const [username, setUsername] = useState('vasu_web3');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    router.push(`/result?username=${encodeURIComponent(username)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 text-lg"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        type="submit"
        className="bg-orange-500 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-orange-600"
      >
        SCAN TWEETS
      </button>
    </form>
  );
}
