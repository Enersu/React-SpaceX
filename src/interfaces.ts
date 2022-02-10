export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
}

export interface LaunchSite {
    site_id: string;
    site_name: string;
    site_name_long: string;
}

export interface Links {
    mission_patch: string;
    mission_patch_small: string;
}

export interface Launch {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    rocket: Rocket;
    launch_site: LaunchSite;
    links: Links;
    details: string;
}
