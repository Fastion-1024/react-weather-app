export interface GeoReponse {
    name: string; // Name of the found location
    local_names: LocalNamesChunk;
    lat: string; // Geographical coordinates of the found location (latitude)
    lon: string; // Geographical coordinates of the found location (longitude)
    country: string; // Country of the found location
    state?: string; // State of the found location
}

export interface LocalNamesChunk {
    af?: string;
    ar?: string;
    az?: string;
    bg?: string;
    ca?: string;
    da?: string;
    de?: string;
    el?: string;
    en?: string;
    eu?: string;
    fa?: string;
    fi?: string;
    fr?: string;
    gl?: string;
    he?: string;
    hi?: string;
    hr?: string;
    hu?: string;
    id?: string;
    it?: string;
    ja?: string;
    la?: string;
    lt?: string;
    mk?: string;
    nl?: string;
    no?: string;
    pl?: string;
    pt?: string;
    ro?: string;
    ru?: string;
    sk?: string;
    sl?: string;
    sr?: string;
    th?: string;
    tr?: string;
    vi?: string;
    zu?: string;
}
