export async function GET(request) {
    // Handles GET request for /api/users
    // Retrieves users from the database or any data source
    const users = [
        { id: 1, name: 'Meysam' },
        { id: 2, name: 'Jana' },
        { id: 3, name: 'Jujmeiii' }
    ];

    // Sends the users as a response
    return new Response(JSON.stringify(users));
}