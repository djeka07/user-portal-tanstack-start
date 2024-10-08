/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.14.7.0 (NJsonSchema v10.5.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class AuthClient {
  constructor(
    private baseApiUrl: string,
    private headers: Headers,
  ) {}

  getBaseUrl(requestedUrl?: string) {
    return requestedUrl ? requestedUrl : this.baseApiUrl;
  }

  transformHttpRequestOptions(options: RequestInit): Promise<RequestInit> {
    if (!!options?.headers) {
      this.headers?.forEach((value, key) => {
        (options.headers as any)[key] = value;
      });
    }

    return Promise.resolve(options);
  }
}

export class AccessTokenAuthClient {
  constructor(private authClient: AuthClient) {}

  getBaseUrl(defaultUrl: string, baseUrl?: string) {
    return this.authClient.getBaseUrl(baseUrl);
  }

  transformOptions(options: RequestInit): Promise<RequestInit> {
    return this.authClient.transformHttpRequestOptions(options);
  }
}

export class ConversationControllerClient extends AccessTokenAuthClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: AuthClient, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : <any>window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
     * Create a new conversation
     */
    createConversation(body: CreateConversationRequest): Promise<ConversationResponse> {
        let url_ = this.baseUrl + "/api/v1/conversations";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processCreateConversation(_response);
        });
    }

    protected processCreateConversation(response: Response): Promise<ConversationResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ConversationResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ConversationResponse>(<any>null);
    }

    /**
     * Get conversations from the logged in user
     * @param page (optional) The page number for pagination, defaults to 1
     * @param take (optional) How many items to take, defaults to 10
     */
    getUserConversations(page?: number | undefined, take?: number | undefined): Promise<ConversationsResponse> {
        let url_ = this.baseUrl + "/api/v1/conversations?";
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.");
        else if (page !== undefined)
            url_ += "page=" + encodeURIComponent("" + page) + "&";
        if (take === null)
            throw new Error("The parameter 'take' cannot be null.");
        else if (take !== undefined)
            url_ += "take=" + encodeURIComponent("" + take) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetUserConversations(_response);
        });
    }

    protected processGetUserConversations(response: Response): Promise<ConversationsResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ConversationsResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ConversationsResponse>(<any>null);
    }

    /**
     * Get a conversation from users
     * @param userIds The users to get conversation from
     */
    getConversationFromUsers(userIds: string[]): Promise<ConversationResponse> {
        let url_ = this.baseUrl + "/api/v1/conversations/users?";
        if (userIds === undefined || userIds === null)
            throw new Error("The parameter 'userIds' must be defined and cannot be null.");
        else
            userIds && userIds.forEach(item => { url_ += "userIds=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetConversationFromUsers(_response);
        });
    }

    protected processGetConversationFromUsers(response: Response): Promise<ConversationResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ConversationResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ConversationResponse>(<any>null);
    }

    /**
     * Get conversation by id
     */
    getConversation(id: string): Promise<ConversationResponse> {
        let url_ = this.baseUrl + "/api/v1/conversations/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetConversation(_response);
        });
    }

    protected processGetConversation(response: Response): Promise<ConversationResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ConversationResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ConversationResponse>(<any>null);
    }

    /**
     * Get messages from a conversation
     * @param page (optional) Page number for pagination, defaults to 1
     * @param take (optional) How many messages to take, defaults to 10
     */
    getConversationMessages(id: string, page?: number | undefined, take?: number | undefined): Promise<MessagesResponse> {
        let url_ = this.baseUrl + "/api/v1/conversations/{id}/messages?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.");
        else if (page !== undefined)
            url_ += "page=" + encodeURIComponent("" + page) + "&";
        if (take === null)
            throw new Error("The parameter 'take' cannot be null.");
        else if (take !== undefined)
            url_ += "take=" + encodeURIComponent("" + take) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetConversationMessages(_response);
        });
    }

    protected processGetConversationMessages(response: Response): Promise<MessagesResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <MessagesResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MessagesResponse>(<any>null);
    }

    /**
     * Create a message
     */
    createMessage(id: string, body: CreateMessageRequest): Promise<MessageReponse> {
        let url_ = this.baseUrl + "/api/v1/conversations/{id}/messages";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processCreateMessage(_response);
        });
    }

    protected processCreateMessage(response: Response): Promise<MessageReponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <MessageReponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MessageReponse>(<any>null);
    }

    /**
     * Get the users from a conversation
     */
    getConversationUsers(id: string): Promise<ConversationUserResponse> {
        let url_ = this.baseUrl + "/api/v1/conversations/{id}/users";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetConversationUsers(_response);
        });
    }

    protected processGetConversationUsers(response: Response): Promise<ConversationUserResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ConversationUserResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ConversationUserResponse>(<any>null);
    }

    /**
     * Add users to a conversation
     */
    addConversationUsers(id: string, body: AddConversationUsersRequest): Promise<ConversationResponse> {
        let url_ = this.baseUrl + "/api/v1/conversations/{id}/users";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processAddConversationUsers(_response);
        });
    }

    protected processAddConversationUsers(response: Response): Promise<ConversationResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ConversationResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ConversationResponse>(<any>null);
    }

    /**
     * Add an admin to the conversation.
     */
    addConversationAdmins(id: string, userId: string): Promise<ConversationResponse> {
        let url_ = this.baseUrl + "/api/v1/conversations/{id}/admins/{userId}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (userId === undefined || userId === null)
            throw new Error("The parameter 'userId' must be defined.");
        url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processAddConversationAdmins(_response);
        });
    }

    protected processAddConversationAdmins(response: Response): Promise<ConversationResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ConversationResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ConversationResponse>(<any>null);
    }

    /**
     * Remove a user from a conversation
     */
    removeConversationUser(id: string, userId: string): Promise<ConversationResponse> {
        let url_ = this.baseUrl + "/api/v1/conversations/{id}/users/{userId}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (userId === undefined || userId === null)
            throw new Error("The parameter 'userId' must be defined.");
        url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processRemoveConversationUser(_response);
        });
    }

    protected processRemoveConversationUser(response: Response): Promise<ConversationResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ConversationResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ConversationResponse>(<any>null);
    }

    /**
     * Update a message read status
     */
    readMessages(id: string, body: CreateMessageRequest): Promise<MessageReponse> {
        let url_ = this.baseUrl + "/api/v1/conversations/{id}/messages/read";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processReadMessages(_response);
        });
    }

    protected processReadMessages(response: Response): Promise<MessageReponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <MessageReponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MessageReponse>(<any>null);
    }
}

export interface ChatUserResponse {
    userId: string;
    id: string;
    username: string;
    name: string;
    issued: number;
}

export interface CreateConversationRequest {
    /** Users that should be in the conversation */
    userIds: string[];
    /** Message to be created when creating the conversation */
    message?: string;
}

export interface ConversionMessageResponse {
    messageId: string;
    message: string;
    createdAt: string;
    from: string;
}

export interface UserResponse {
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface ConversationResponse {
    conversationId: string;
    name?: string;
    isGroup: boolean;
    createdAt: string;
    lastMessage?: ConversionMessageResponse;
    users: UserResponse[];
    admins: UserResponse[];
}

export interface ConversationsResponse {
    total: number;
    hasNextPage: boolean;
    page: number;
    take: number;
    items: ConversationResponse[];
}

export interface MessageUser {
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface UserReadMessageResponse {
    user: MessageUser;
    readAt: string;
}

export interface MessageReponse {
    messageId: string;
    conversationId: string;
    from: MessageUser;
    message: string;
    createdAt: string;
    readBy: UserReadMessageResponse[];
}

export interface MessagesResponse {
    items: MessageReponse[];
    page: number;
    take: number;
    total: number;
    hasNextPage: boolean;
}

export interface ConversationUserResponse {
    users: UserResponse[];
}

export interface AddConversationUsersRequest {
    userIds: string[];
}

export interface CreateMessageRequest {
    message: string;
}

export interface MessageCreatedEvent {
    message: MessageReponse;
    to: string[];
    from: string;
}

export interface MessageReadEvent {
    messages: MessageReponse[];
    to: string[];
    from: string;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}