<?php

return [
    'home' => 'dashborde',
    'login' => 'logine',
    'logout' => 'logout',
    'register' => 'register',
    'password.request' => 'password/reset',
    'password.reset' => 'password/reset/{token}',
    'password.update' => 'password/reset',
    'password.confirm' => 'password/confirm',
    'verification.notice' => 'email/verify',
    'verification.verify' => 'email/verify/{id}/{hash}',
    'verification.resend' => 'email/resend',

    'post' => [
        'index' => 'poste',
        'show' => 'poste/{post}'
    ],
    'category' => [
        'post' => [
            'show' => 'categorye/{category}/poste/{post}'
        ]
    ]
];
