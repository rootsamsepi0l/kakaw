document.addEventListener('DOMContentLoaded', () => {
    const coworkingForm = document.getElementById('coworking-form');
    const contactForm = document.getElementById('contact-form');

    if (coworkingForm) {
        coworkingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = coworkingForm.querySelector('[name="name"]').value;
            const email = coworkingForm.querySelector('[name="email"]').value;
            const plan = coworkingForm.querySelector('[name="plan"]').value;

            if (name && email && plan) {
                // TODO: Replace with your n8n coworking webhook URL.
                const n8nWebhookUrl = 'YOUR_N8N_COWORKING_WEBHOOK_URL_HERE';

                if (!n8nWebhookUrl) {
                    alert('La funcionalidad de registro no está disponible en este momento. Por favor, inténtalo más tarde.');
                    return;
                }

                fetch(n8nWebhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, plan }),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert('¡Gracias por unirte! Revisa tu correo para más detalles.');
                    coworkingForm.reset();
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
                });
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = contactForm.querySelector('[name="name"]').value;
            const email = contactForm.querySelector('[name="email"]').value;
            const message = contactForm.querySelector('[name="message"]').value;

            if (name && email && message) {
                // TODO: Replace with your n8n contact webhook URL.
                const n8nWebhookUrl = 'YOUR_N8N_CONTACT_WEBHOOK_URL_HERE';

                if (!n8nWebhookUrl) {
                    alert('La funcionalidad de contacto no está disponible en este momento. Por favor, inténtalo más tarde.');
                    return;
                }

                fetch(n8nWebhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message }),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
                });
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }
});
