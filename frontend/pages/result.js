import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Result() {
  const router = useRouter();
  const { username } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (username) {
      fetch(`http://localhost:8000/api/check?username=${username}`)
        .then(res => res.json())
        .then(setData);
    }
  }, [username]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Cysic Addiction Result</h1>
      {data ? (
        <div className="text-center">
          <p className="text-xl">@{username} is <span className="font-bold text-orange-600">{data.score}%</span> Cysic-pilled</p>
          <p className="mt-2 text-lg">Diagnosis: <strong>{data.label}</strong></p>
          <button
            onClick={() => navigator.share({ text: `I'm ${data.score}% Cysic-pilled. Are you? Check yours: cysic-addiction.vercel.app` })}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Share to X
          </button>
        </div>
      ) : (
        <p>Loading addiction score...</p>
      )}
    </div>
  );
}
