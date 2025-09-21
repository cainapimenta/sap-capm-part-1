using {mycapm.db as db} from '../db/externalApiDataModel';

service ExternalApiService {
    entity ExternalData as projection on db.ExternalData;
}
