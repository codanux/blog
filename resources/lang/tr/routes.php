<?php

return [
    'home' => 'panel',
    'login' => 'giris',
    'logout' => 'cikis',
    'register' => 'kayit',
    'password.request' => 'sifre/sifirla',
    'password.reset' => 'sifre/sifirla/{token}',
    'password.update' => 'sifre/sifirla',
    'password.confirm' => 'sifre/onayla',
    'verification.notice' => 'email/dogrula',
    'verification.verify' => 'email/dogrula/{id}/{hash}',
    'verification.resend' => 'email/yeniden-gonder',


    'post' => [
        'index' => 'postlar',
        'show' => 'post/{post}'
    ],
    'category' => [
        'post' => [
            'show' => 'kategori/{category}/postlar/{post}'
        ]
    ]
];
