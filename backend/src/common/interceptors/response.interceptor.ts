export function asResponse<T>(data: T, message = "Success") {
  return {
    success: true,
    message,
    data,
  };
}

export function asPaginatedResponse<T>(
  data: T[],
  total: number,
  page: number,
  limit: number
) {
  return {
    success: true,
    data,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}
