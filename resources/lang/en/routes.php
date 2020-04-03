<?php

return [
    'home' => 'dashboard',
    'login' => 'login',
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
        'index' => 'posts',
        'show' => 'post/{post}'
    ],
    'category' => [
        'post' => [
            'show' => 'category/{category}/post/{post}'
        ]
    ]
];
