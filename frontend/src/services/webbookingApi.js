/**
 * Webbooking store API – submits booking form to backend.
 * @param {Record<string, string>} data - Form fields matching API (pickup_location, dropoff_location, etc.)
 * @returns {Promise<{ ok: boolean, data?: unknown, error?: string }>}
 */
export async function submitWebbookingStore(data) {
    const baseUrl = import.meta.env.VITE_WEBBOOKING_API_URL || 'https://admin.genzoride.com';
    const url = `${baseUrl}/api/v1/common/webbooking/store`;

    const form = new FormData();
    const keys = [
        'pickup_location',
        'dropoff_location',
        'pickup_date',
        'pickup_time',
        'name',
        'mobile_number',
        'pickup_lat',
        'pickup_lang',
        'dropoff_lat',
        'dropoff_lang',
    ];
    keys.forEach((key) => {
        const value = data[key];
        if (value !== undefined && value !== null && String(value).trim() !== '') {
            form.append(key, String(value).trim());
        }
    });

    try {
        const res = await fetch(url, {
            method: 'POST',
            body: form,
            headers: {
                Accept: 'application/json',
            },
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
            const message = json?.message || json?.error || res.statusText || 'Request failed';
            return { ok: false, error: message };
        }
        return { ok: true, data: json };
    } catch (err) {
        const message = err?.message || 'Network error';
        return { ok: false, error: message };
    }
}

/**
 * Contact form API – submits contact details to backend.
 * @param {Record<string, string>} data - Form fields matching API.
 * @returns {Promise<{ ok: boolean, data?: unknown, error?: string }>}
 */
export async function submitContactForm(data) {
    const baseUrl = import.meta.env.VITE_WEBBOOKING_API_URL || 'https://admin.genzoride.com';
    const url = `${baseUrl}/api/v1/common/contact-form`;

    const form = new FormData();
    const keys = ['name', 'email', 'mobile', 'role', 'message'];

    keys.forEach((key) => {
        const value = data[key];
        if (value !== undefined && value !== null && String(value).trim() !== '') {
            form.append(key, String(value).trim());
        }
    });

    try {
        const res = await fetch(url, {
            method: 'POST',
            body: form,
            headers: {
                Accept: 'application/json',
            },
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
            const message = json?.message || json?.error || res.statusText || 'Request failed';
            return { ok: false, error: message };
        }
        return { ok: true, data: json };
    } catch (err) {
        const message = err?.message || 'Network error';
        return { ok: false, error: message };
    }
}
