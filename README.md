<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Book Tower – 12-Storey Bookstore in Tashkent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background: #f5f5f5;
            color: #222;
        }
        header {
            background: linear-gradient(135deg, #2c3e50, #8e44ad);
            color: #fff;
            padding: 20px 15px 30px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        header p {
            font-size: 14px;
            opacity: 0.9;
        }
        nav {
            margin-top: 10px;
        }
        nav a {
            display: inline-block;
            margin: 5px 8px;
            padding: 6px 10px;
            text-decoration: none;
            font-size: 13px;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.5);
            color: #fff;
        }
        nav a:hover {
            background: rgba(255,255,255,0.15);
        }
        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 20px 15px 40px;
        }
        section {
            background: #fff;
            margin-top: 20px;
            padding: 20px 15px;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        section h2 {
            margin-bottom: 10px;
            font-size: 22px;
            color: #2c3e50;
        }
        .intro {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            align-items: center;
        }
        .intro-text {
            flex: 2;
            min-width: 250px;
        }
        .intro-highlight {
            background: #f0ebff;
            border-left: 4px solid #8e44ad;
            padding: 10px;
            margin-top: 10px;
            font-size: 14px;
        }
        .intro-img {
            flex: 1;
            min-width: 200px;
            text-align: center;
            font-size: 13px;
            opacity: 0.8;
        }
        .intro-img div {
            width: 100%;
            height: 180px;
            border-radius: 10px;
            background: linear-gradient(135deg, #8e44ad, #3498db);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: bold;
            padding: 10px;
        }
        .floors {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 10px;
            margin-top: 10px;
        }
        .floor-card {
            border-radius: 10px;
            padding: 10px;
            border: 1px solid #eee;
            background: #fafafa;
            font-size: 14px;
        }
        .floor-card strong {
            display: block;
            font-size: 15px;
            margin-bottom: 4px;
            color: #8e44ad;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 15px;
            margin-top: 10px;
        }
        .info-box {
            background: #fafafa;
            border-radius: 10px;
            padding: 10px;
            font-size: 14px;
            border: 1px solid #eee;
        }
        .info-box h3 {
            font-size: 16px;
            margin-bottom: 6px;
            color: #2c3e50;
        }
        .contact-form label {
            display: block;
            margin-top: 10px;
            font-size: 14px;
        }
        .contact-form input,
        .contact-form textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 14px;
        }
        .contact-form button {
            margin-top: 12px;
            padding: 10px 18px;
            border: none;
            border-radius: 20px;
            background: #8e44ad;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
        }
        .contact-form button:hover {
            opacity: 0.9;
        }
        footer {
            text-align: center;
            padding: 15px;
            font-size: 12px;
            color: #555;
        }
        .badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 10px;
            background: #f0ebff;
            font-size: 11px;
            margin-right: 5px;
        }
        @media (max-width: 600px) {
            header h1 { font-size: 22px; }
        }
    </style>
</head>
<body>

<header>
    <h1>Book Tower</h1>
    <p>A modern 12-storey bookstore in Tashkent</p>
    <nav>
        <a href="#about">About us</a>
        <a href="#floors">12 floors</a>
        <a href="#online">Online contact</a>
        <a href="#info">Location & hours</a>
    </nav>
</header>

<div class="container">

    <!-- About -->
    <section id="about">
        <h2>About Book Tower</h2>
        <div class="intro">
            <div class="intro-text">
                <p>
                    <strong>Book Tower</strong> is a 12-storey bookstore located in Tashkent.
                    Each floor is dedicated to a specific theme and mood.
                    Here you can find fiction, non-fiction, textbooks, language learning materials,
                    colourful children’s books and many more useful titles.
                </p>
                <div class="intro-highlight">
                    <p>
                        📚 <strong>Our mission:</strong> not only to sell books, but to create a comfortable space
                        for meetings, learning, inspiration and creative events.
                    </p>
                </div>
                <p style="margin-top:8px; font-size:14px;">
                    Below you can see the list of all 12 floors and how you can contact us online.
                </p>
            </div>
            <div class="intro-img">
                <div>
                    BOOK<br>TOWER<br><small>Tashkent – 12 floors of books</small>
                </div>
                <p style="margin-top:8px;">
                    For guests who cannot visit Tashkent in person, we provide online support and pre-order options.
                </p>
            </div>
        </div>
    </section>

    <!-- 12 floors -->
    <section id="floors">
        <h2>12 floors – 12 sections</h2>
        <div class="floors">
            <div class="floor-card">
                <strong>1st floor: Reception & New arrivals</strong>
                Bestsellers, newly released books and special promotions.
            </div>
            <div class="floor-card">
                <strong>2nd floor: Fiction</strong>
                Uzbek and world literature, novels, short stories, detective books and classics.
            </div>
            <div class="floor-card">
                <strong>3rd floor: Non-fiction</strong>
                Psychology, business, history, motivation and personal development.
            </div>
            <div class="floor-card">
                <strong>4th floor: Textbooks</strong>
                School, lyceum, college and university textbooks and study guides.
            </div>
            <div class="floor-card">
                <strong>5th floor: Languages</strong>
                Dictionaries, grammar books and self-study materials for English, Russian and other languages.
            </div>
            <div class="floor-card">
                <strong>6th floor: Children’s books</strong>
                Fairy tales, picture books, activity books and educational titles for kids.
            </div>
            <div class="floor-card">
                <strong>7th floor: Comics & manga</strong>
                Comics, graphic novels, manga series and collector’s editions.
            </div>
            <div class="floor-card">
                <strong>8th floor: Art & design</strong>
                Books on drawing, design, photography, architecture and creativity.
            </div>
            <div class="floor-card">
                <strong>9th floor: Spiritual & philosophy</strong>
                Books on spirituality, ethics, philosophy and religion (in line with local regulations).
            </div>
            <div class="floor-card">
                <strong>10th floor: Technology & IT</strong>
                Programming, computer science, technology and engineering titles.
            </div>
            <div class="floor-card">
                <strong>11th floor: Archives & rare books</strong>
                Rare editions, old prints, special collections and limited editions.
            </div>
            <div class="floor-card">
                <strong>12th floor: Reading hall & events</strong>
                Reading area, author meetings, book clubs, seminars and training sessions.
            </div>
        </div>
    </section>

    <!-- Online contact -->
    <section id="online">
        <h2>Online contact</h2>
        <p style="font-size:14px; margin-bottom:8px;">
            You can send us your questions, orders or suggestions using the form below.
            For now this form only shows a demo message on the screen, but later it can be connected
            to Telegram, email or a database.
        </p>

        <form class="contact-form" onsubmit="showMessage(event)">
            <label for="name">Your name</label>
            <input type="text" id="name" placeholder="Enter your name" required>

            <label for="phone">Phone number (Telegram/WhatsApp)</label>
            <input type="text" id="phone" placeholder="+998 9x xxx xx xx">

            <label for="message">Your question or order</label>
            <textarea id="message" rows="4" placeholder="Which book are you looking for?" required></textarea>

            <button type="submit">Send</button>
        </form>

        <p id="form-result" style="margin-top:10px; font-size:13px;"></p>
    </section>

    <!-- Location & info -->
    <section id="info">
        <h2>Location, opening hours & contacts</h2>
        <div class="info-grid">
            <div class="info-box">
                <h3>Location</h3>
                <p>
                    📍 <strong>Book Tower</strong><br>
                    Tashkent city, (here you can add the street name and building number)<br>
                    Example: Tashkent city, Amir Temur street, 12-storey “Book Tower” building.
                </p>
            </div>
            <div class="info-box">
                <h3>Opening hours</h3>
                <p>
                    Monday – Sunday<br>
                    ⏰ 09:00 – 21:00<br><br>
                    <span class="badge">Open on holidays as well</span>
                </p>
            </div>
            <div class="info-box">
                <h3>Contacts</h3>
                <p>
                    📞 Phone: +998 9x xxx xx xx<br>
                    ✉️ Email: info@booktower.uz (or any email you use)<br>
                    💬 Telegram: @booktower (replace with your real username)
                </p>
            </div>
            <div class="info-box">
                <h3>Social media</h3>
                <p>
                    <span class="badge">Instagram</span> @booktower<br>
                    <span class="badge">Telegram channel</span> t.me/booktower<br>
                    <span class="badge">Facebook</span> Book Tower
                </p>
            </div>
        </div>
    </section>

</div>

<footer>
    © <span id="year"></span> Book Tower, Tashkent – All rights reserved.
</footer>

<script>
    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple form handler (demo)
    function showMessage(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const result = document.getElementById('form-result');
        if (name) {
            result.textContent = name + ", thank you! Your request has been received (demo version).";
        } else {
            result.textContent = "Thank you! Your request has been received (demo version).";
        }
    }
</script>

</body>
</html>
