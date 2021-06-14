<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'anik_db_two' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'l$mtRsg;nn`}aBOq*eDLb,o,GUa(/gbEIiEHZ~QU,:_G~.aZ3)L^u019n6yO*v]<' );
define( 'SECURE_AUTH_KEY',  'Pee*ni19bU>k!|`I/5ZQ!`uzhxbF9YT{qC(yl!q;%pa==f}?qYLz*+UTU;7qGTCs' );
define( 'LOGGED_IN_KEY',    '/&-82FV#R,Lq/mb4YzrP(;/;@LR$g}k%kayu/h3;I<fs0 H^AUgEb{[i>=zu(~^B' );
define( 'NONCE_KEY',        '38:9x?s#$J.mzqkF,_ms)=o/|b vJQhg?}!,<[|vFbBUtEtngQD&pKT:&}UJv|Qy' );
define( 'AUTH_SALT',        '{=$Ku}(}Kiia24vg|]p91z {.+JZ^!yS;4#~!pSyc`;c9/aQ!L)uE,~H9#AHktV3' );
define( 'SECURE_AUTH_SALT', '{ENp-Q=&`*s5.AAYZ^Zo|x8|>coLXMPxH:$pDXVOiqoC}=EDi?UX|<X-8k&BoYL,' );
define( 'LOGGED_IN_SALT',   'n}MW~@`J0YeoE,V}GC|5^g`Pe~1>H^4@Epm0tskU;g_.tTrn=+Q?xjoP3UG1t|Ay' );
define( 'NONCE_SALT',       'O+6KG?Dm!hxQdcM]%=E4^IJb0|xmf<Ad.>r!0V#9AQB/Nwbx,6FU05uhAJca`H[j' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
