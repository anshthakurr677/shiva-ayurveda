/* ================================================
   SHIVA AYURVEDA — Supabase Config
   
   👉 Yahan apni Supabase keys daalo:
   1. supabase.com pe jaao
   2. New Project banao
   3. Settings → API → keys copy karo
================================================ */

const SUPABASE_URL  = "https://YOUR_PROJECT.supabase.co"; // ← apni URL
const SUPABASE_ANON = "YOUR_ANON_KEY_HERE";               // ← apni key

const ADMIN_PASSWORD = "shiva@admin2024"; // ← admin panel password badlo

const RAZORPAY_KEY = "rzp_test_YOUR_KEY"; // ← Razorpay key (baad mein)

const COUPON_CODES = {
  "SHIVA10": 10,  // 10% off
  "FIRST20": 20,  // 20% off first order
};

/* Supabase Client */
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);
