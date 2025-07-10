<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Newsletter Subscribers</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #333; padding: 8px; text-align: left; font-size: 12px; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h2>📧 Newsletter Subscribers</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Subscribed At</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($subscribers as $sub)
                <tr>
                    <td>{{ $sub->id }}</td>
                    <td>{{ $sub->email }}</td>
                    <td>{{ $sub->created_at->format('Y-m-d H:i') }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
