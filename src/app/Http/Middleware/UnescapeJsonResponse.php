<?php

namespace App\Http\Middleware;

use Illuminate\Http\JsonResponse;

/**
 * 参考：https://zenn.dev/nrikiji/articles/d5b991402ea89c
 */
class UnescapeJsonResponse
{
    public function handle($request, \Closure $next)
    {
        $response = $next($request);

        // JSON以外は何もしない
        if (!$response instanceof JsonResponse) {
            return $response;
        }

        // エンコードオプションを追加して設定し直す
        $newEncodingOptions = $response->getEncodingOptions() | JSON_UNESCAPED_UNICODE;
        $response->setEncodingOptions($newEncodingOptions);

        return $response;
    }
}
