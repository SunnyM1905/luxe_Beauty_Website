-- ============================================
-- Luxe Beauty Parlour - Seed Data
-- ============================================

-- Categories
insert into public.categories (name, slug, description) values
('Hair', 'hair', 'Haircuts, styling, coloring, and treatments'),
('Skin', 'skin', 'Facials, skincare, and treatments'),
('Nails', 'nails', 'Manicures, pedicures, and nail art'),
('Makeup', 'makeup', 'Professional makeup for all occasions'),
('Bridal', 'bridal', 'Complete bridal packages'),
('Spa', 'spa', 'Massages and spa treatments'),
('Waxing', 'waxing', 'Threading and waxing services')
on conflict (slug) do nothing;

-- Services
insert into public.services (category_id, name, description, duration_minutes, price) values
((select id from public.categories where slug = 'hair'), 'Haircut & Blow Dry', 'Professional haircut with wash and blow-dry styling.', 45, 45),
((select id from public.categories where slug = 'hair'), 'Full Hair Color', 'Complete hair coloring with premium products.', 120, 120),
((select id from public.categories where slug = 'hair'), 'Hair Styling', 'Blow dry and styling for any occasion.', 60, 55),
((select id from public.categories where slug = 'skin'), 'Deep Cleansing Facial', 'Rejuvenating facial with extraction and hydration.', 60, 80),
((select id from public.categories where slug = 'skin'), 'Anti-Aging Treatment', 'Advanced anti-aging facial with serums.', 90, 120),
((select id from public.categories where slug = 'nails'), 'Classic Manicure', 'Nail shaping, cuticle care, and polish.', 45, 35),
((select id from public.categories where slug = 'nails'), 'Gel Nail Extensions', 'Durable gel extensions with custom design.', 120, 75),
((select id from public.categories where slug = 'makeup'), 'Bridal Makeup', 'Full glam bridal makeup with trial included.', 180, 350),
((select id from public.categories where slug = 'makeup'), 'Party Makeup', 'Glamorous makeup for parties and events.', 90, 100),
((select id from public.categories where slug = 'spa'), 'Swedish Massage', 'Relaxing full-body massage with aromatic oils.', 90, 100),
((select id from public.categories where slug = 'waxing'), 'Full Body Wax', 'Complete waxing service for smooth skin.', 90, 85)
on conflict do nothing;

-- Offers
insert into public.offers (code, description, discount_type, discount_value, max_uses, expires_at) values
('LUXE20', 'First visit discount', 'percentage', 20, 100, '2025-12-31'),
('SPA50', '$50 off spa packages', 'flat', 50, 50, '2025-06-30'),
('BRIDAL15', '15% off bridal packages', 'percentage', 15, 30, '2025-12-31')
on conflict (code) do nothing;

-- Membership plans
insert into public.membership_plans (name, description, price, sessions, validity_days) values
('Silver', 'Basic membership with 10% off all services', 99, 0, 365),
('Gold', 'Premium membership with 20% off and priority booking', 199, 0, 365),
('Prepaid Facial', '5 facials for the price of 4', 320, 5, 180)
on conflict (name) do nothing;

-- Staff
insert into public.staff (full_name, role, specialties, bio, experience_years) values
('Sarah Johnson', 'Senior Stylist', '{"Haircut","Coloring","Styling"}', 'Passionate about creating looks that enhance natural beauty.', 12),
('Emily Chen', 'Makeup Artist', '{"Bridal","Editorial","Special FX"}', 'Award-winning makeup artist specializing in bridal glam.', 8),
('Maria Garcia', 'Esthetician', '{"Facials","Skincare","Waxing"}', 'Dedicated to providing luxurious skincare experiences.', 6),
('Jessica Lee', 'Nail Technician', '{"Gel Nails","Art","Extensions"}', 'Creative nail artist with an eye for detail.', 5)
on conflict do nothing;
