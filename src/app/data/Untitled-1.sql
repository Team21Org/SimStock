INSERT INTO simstockdb."User"(
    user_id,
    user_name,
    user_email,
    user_password,
    user_phone,
    user_address
)
VALUES (1, 'Sam Kline', 'samkline790@gmail.com', 'somepassword', '1234567890', '145 Main St')
ON CONFLICT (user_id) DO NOTHING;