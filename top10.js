
            // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  authDomain: "mysitetracker-a6fed.firebaseapp.com",
  projectId: "mysitetracker-a6fed",
  storageBucket: "mysitetracker-a6fed.firebasestorage.app",
  messagingSenderId: "395081535250",
  appId: "1:395081535250:web:bbeb7248389377af70edcb",
  measurementId: "G-SGBSPLGK8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  
  const db = getFirestore(app);

  const now = new Date();
  const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

  // Ladataan kaikki käynnit viimeiseltä kuukaudelta
  const q = query(collection(db, "visits"),
                  where("timestamp", ">=", Timestamp.fromDate(monthAgo)));

  const snapshot = await getDocs(q);
  const counts = {};

  snapshot.forEach(doc => {
    const page = doc.data().page;
    counts[page] = (counts[page] || 0) + 1;
  });

  // Järjestä ja näytä
  const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]).slice(0, 10);

  const ul = document.getElementById("top10-list");
  ul.innerHTML = "";

  for (const [page, count] of sorted) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${page}">${page}</a> (${count} käyntiä)`;
    ul.appendChild(li);
  }
