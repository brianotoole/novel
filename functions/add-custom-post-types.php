<?php

// Comment these to disable the respective cpt
add_action( 'init', 'regsiter_blog' );
//add_action( 'init', 'register_locations' );
//add_action( 'init', 'register_resources' );

/**
 * Registers a new post type
 * @uses $wp_post_types Inserts new post type object into the list
 *
 * @param string  Post type key, must not exceed 20 characters
 * @param array|string  See optional args description above.
 * @return object|WP_Error the registered post type object, or an error object
 */
function regsiter_blog() {

	$labels = array(
		'name'               => __( 'Blog', 'text-domain' ),
		'singular_name'      => __( 'Blog', 'text-domain' ),
		'add_new'            => _x( 'Add New Blog', 'text-domain', 'text-domain' ),
		'add_new_item'       => __( 'Add New Blog', 'text-domain' ),
		'edit_item'          => __( 'Edit Blog', 'text-domain' ),
		'new_item'           => __( 'New Blog', 'text-domain' ),
		'view_item'          => __( 'View Blog', 'text-domain' ),
		'search_items'       => __( 'Search Blog', 'text-domain' ),
		'not_found'          => __( 'No Blog found', 'text-domain' ),
		'not_found_in_trash' => __( 'No Blog found in Trash', 'text-domain' ),
		'parent_item_colon'  => __( 'Parent Blog:', 'text-domain' ),
		'menu_name'          => __( 'Blog', 'text-domain' ),
	);

	$args = array(
		'labels'              => $labels,
		'hierarchical'        => true,
		'description'         => 'description',
		'taxonomies'          => array(),
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => null,
		'menu_icon'           => 'dashicons-media-text',
		'show_in_nav_menus'   => true,
		'publicly_queryable'  => true,
		'exclude_from_search' => false,
		'has_archive'         => false,
		'query_var'           => true,
		'can_export'          => true,
		'rewrite'             => true,
		'capability_type'     => 'post',
		'supports'            => array(
			'title',
			'editor',
			'author',
			'thumbnail',
			'excerpt',
			'custom-fields',
			'trackbacks',
			'comments',
			'revisions',
			'page-attributes',
			'post-formats',
		),
	);

	register_post_type( 'blog', $args );
}




// custom post type - athlete
if( ! function_exists( 'bdg_athlete' ) ) {
	function bdg_athlete() {



		// athlete
		$labels = array(
			'name'               => _x( 'Athletes', 'bdgarchitect' ),
			'singular_name'      => _x( 'Athlete', 'bdgarchitect' ),
			'menu_name'          => _x( 'Athletes', 'bdgarchitect' ),
			'name_admin_bar'     => _x( 'Athlete', 'bdgarchitect' ),
			'add_new'            => _x( 'Add New', 'bdgarchitect' ),
			'add_new_item'       => __( 'Add New Athlete', 'bdgarchitect' ),
			'new_item'           => __( 'New Athlete', 'bdgarchitect' ),
			'edit_item'          => __( 'Edit Athlete', 'bdgarchitect' ),
			'view_item'          => __( 'View Athlete', 'bdgarchitect' ),
			'all_items'          => __( 'All Athlete', 'bdgarchitect' ),
			'search_items'       => __( 'Search Athletess', 'bdgarchitect' ),
			'parent_item_colon'  => __( 'Parent Athletes:', 'bdgarchitect' ),
			'not_found'          => __( 'No Athletes found.', 'bdgarchitect' ),
			'not_found_in_trash' => __( 'No Athletes found in Trash.', 'bdgarchitect' )
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'athlete' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => true,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
		);

		register_post_type( 'athlete', $args );

		// taxonomy - athlete_category
		$athlete_labels = array(
			'name'              => _x( 'Athlete Type', 'taxonomy general name' ),
			'singular_name'     => _x( 'Category', 'taxonomy singular name' ),
			'search_items'      => __( 'Search Athlete Categories' ),
			'all_items'         => __( 'All Categories' ),
			'parent_item'       => __( 'Parent Category' ),
			'parent_item_colon' => __( 'Parent Category:' ),
			'edit_item'         => __( 'Edit Category' ),
			'update_item'       => __( 'Update Category' ),
			'add_new_item'      => __( 'Add New Category' ),
			'new_item_name'     => __( 'New Category Name' ),
			'menu_name'         => __( 'Athlete Types' ),
		);

		$athlete_args = array(
			'hierarchical'      => true,
			'labels'            => $athlete_labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'athlete_category' ),
		);

		register_taxonomy( 'athlete_category', array( 'athlete' ), $athlete_args );


		// taxonomy - athlete_city_category
		$athlete_labels = array(
			'name'              => _x( 'Athlete City', 'taxonomy general name' ),
			'singular_name'     => _x( 'Category', 'taxonomy singular name' ),
			'search_items'      => __( 'Search Athlete City Categories' ),
			'all_items'         => __( 'All Categories' ),
			'parent_item'       => __( 'Parent Category' ),
			'parent_item_colon' => __( 'Parent Category:' ),
			'edit_item'         => __( 'Edit Category' ),
			'update_item'       => __( 'Update Category' ),
			'add_new_item'      => __( 'Add New Category' ),
			'new_item_name'     => __( 'New Category Name' ),
			'menu_name'         => __( 'Athlete Cities' ),
		);

		$athlete_args = array(
			'hierarchical'      => true,
			'labels'            => $athlete_labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'athlete_city_category' ),
		);

		register_taxonomy( 'athlete_city_category', array( 'athlete' ), $athlete_args );


		// taxonomy - athlete_tag_category
		$athlete_labels = array(
			'name'              => _x( 'athlete Tags', 'taxonomy general name' ),
			'singular_name'     => _x( 'Category', 'taxonomy singular name' ),
			'search_items'      => __( 'Search athlete Tag Categories' ),
			'all_items'         => __( 'All Categories' ),
			'parent_item'       => __( 'Parent Category' ),
			'parent_item_colon' => __( 'Parent Category:' ),
			'edit_item'         => __( 'Edit Category' ),
			'update_item'       => __( 'Update Category' ),
			'add_new_item'      => __( 'Add New Category' ),
			'new_item_name'     => __( 'New Category Name' ),
			'menu_name'         => __( 'athlete Tags' ),
		);

		$athlete_args = array(
			'hierarchical'      => true,
			'labels'            => $athlete_labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'athlete_tag_category' ),
		);

		register_taxonomy( 'athlete_tag_category', array( 'athlete' ), $athlete_args );
		
	}
}
add_action( 'init', 'bdg_athlete' );





// custom post type - career
if( ! function_exists( 'bdg_career' ) ) {
	function bdg_career() {

		

		// career
		$labels = array(
			'name'               => _x( 'Careers', 'bdgarchitect' ),
			'singular_name'      => _x( 'Career', 'bdgarchitect' ),
			'menu_name'          => _x( 'Careers', 'bdgarchitect' ),
			'name_admin_bar'     => _x( 'Career', 'bdgarchitect' ),
			'add_new'            => _x( 'Add New', 'bdgarchitect' ),
			'add_new_item'       => __( 'Add New Career', 'bdgarchitect' ),
			'new_item'           => __( 'New Career', 'bdgarchitect' ),
			'edit_item'          => __( 'Edit Career', 'bdgarchitect' ),
			'view_item'          => __( 'View Career', 'bdgarchitect' ),
			'all_items'          => __( 'All Careers', 'bdgarchitect' ),
			'search_items'       => __( 'Search Careers', 'bdgarchitect' ),
			'parent_item_colon'  => __( 'Parent Careers:', 'bdgarchitect' ),
			'not_found'          => __( 'No Careers found.', 'bdgarchitect' ),
			'not_found_in_trash' => __( 'No Careers found in Trash.', 'bdgarchitect' )
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'career' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => true,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
		);

		register_post_type( 'career', $args );

		// taxonomy - career_category
		$career_labels = array(
			'name'              => _x( 'Career Categories', 'taxonomy general name' ),
			'singular_name'     => _x( 'Category', 'taxonomy singular name' ),
			'search_items'      => __( 'Search Career Categories' ),
			'all_items'         => __( 'All Categories' ),
			'parent_item'       => __( 'Parent Category' ),
			'parent_item_colon' => __( 'Parent Category:' ),
			'edit_item'         => __( 'Edit Category' ),
			'update_item'       => __( 'Update Category' ),
			'add_new_item'      => __( 'Add New Category' ),
			'new_item_name'     => __( 'New Category Name' ),
			'menu_name'         => __( 'Category' ),
		);

		$career_args = array(
			'hierarchical'      => true,
			'labels'            => $carer_labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'career_category' ),
		);

		register_taxonomy( 'career_category', array( 'career' ), $career_args );

	}
}
add_action( 'init', 'bdg_career' );





// custom post type - team
if( ! function_exists( 'bdg_team' ) ) {
	function bdg_team() {



		// career
		$labels = array(
			'name'               => _x( 'Team', 'bdgarchitect' ),
			'singular_name'      => _x( 'Team', 'bdgarchitect' ),
			'menu_name'          => _x( 'Team', 'bdgarchitect' ),
			'name_admin_bar'     => _x( 'Team', 'bdgarchitect' ),
			'add_new'            => _x( 'Add New', 'bdgarchitect' ),
			'add_new_item'       => __( 'Add New Team', 'bdgarchitect' ),
			'new_item'           => __( 'New Team', 'bdgarchitect' ),
			'edit_item'          => __( 'Edit Team', 'bdgarchitect' ),
			'view_item'          => __( 'View Team', 'bdgarchitect' ),
			'all_items'          => __( 'All Team Members', 'bdgarchitect' ),
			'search_items'       => __( 'Search Team Members', 'bdgarchitect' ),
			'parent_item_colon'  => __( 'Parent Team Members:', 'bdgarchitect' ),
			'not_found'          => __( 'No Team Members found.', 'bdgarchitect' ),
			'not_found_in_trash' => __( 'No Team Members found in Trash.', 'bdgarchitect' )
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'team-member' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => true,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
		);

		register_post_type( 'team', $args );

		// taxonomy - team_category
		$career_labels = array(
			'name'              => _x( 'Team Categories', 'taxonomy general name' ),
			'singular_name'     => _x( 'Category', 'taxonomy singular name' ),
			'search_items'      => __( 'Search Team Categories' ),
			'all_items'         => __( 'All Categories' ),
			'parent_item'       => __( 'Parent Category' ),
			'parent_item_colon' => __( 'Parent Category:' ),
			'edit_item'         => __( 'Edit Category' ),
			'update_item'       => __( 'Update Category' ),
			'add_new_item'      => __( 'Add New Category' ),
			'new_item_name'     => __( 'New Category Name' ),
			'menu_name'         => __( 'Category' ),
		);

		$career_args = array(
			'hierarchical'      => true,
			'labels'            => $carer_labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'team_category' ),
		);

		register_taxonomy( 'team_category', array( 'team' ), $career_args );

	}
}
add_action( 'init', 'bdg_team' );
