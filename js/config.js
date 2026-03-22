/* ================================================
   SHIVA AYURVEDA — Supabase Config
   
   👉 Yahan apni Supabase keys daalo:
   1. supabase.com pe jaao
   2. New Project banao
   3. Settings → API → keys copy karo
================================================ */

const SUPABASE_URL  = "https://pmnjikakhvzmqvlvrfjg.supabase.co"; // ← apni URL
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtbmppa2FraHZ6bXF2bHZyZmpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxODcyMDcsImV4cCI6MjA4OTc2MzIwN30.-56dRJeH5C3l314opaT1NAs9-cATWBowoQUVUV_Iw7w";               // ← apni key

const ADMIN_PASSWORD = "shiva@admin2024"; // ← admin panel password badlo

const RAZORPAY_KEY = "rzp_test_YOUR_KEY"; // ← Razorpay key (baad mein)

const COUPON_CODES = {
  "SHIVA10": 10,  // 10% off
  "FIRST20": 20,  // 20% off first order
};

/* Supabase Client */
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);
